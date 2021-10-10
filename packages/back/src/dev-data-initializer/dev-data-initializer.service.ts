import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import { CaffeeBuildingsService } from '../caffee-buildings/caffee-buildings.service';
import { CaffeeTablesService } from '../caffee-tables/caffee-tables.service';
import { CreateCaffeeTableDto } from '../caffee-tables/dto/create-caffee-table.dto';
import { CoffeesService } from '../coffees/coffees.service';
import { CreateCoffeeDto } from '../coffees/dto/create-coffee.dto';
import { StringEnumToArray } from '../common/EnumToArray';
import { CreateReservationStatusDto } from '../reservation-status/dto/create-reservation-status.dto';
import { ReservationStatusEnum } from '../reservation-status/reservation-status-enum';
import { ReservationStatusService } from '../reservation-status/reservation-status.service';
import { CreateReservationDto } from '../reservations/dto/create-reservation.dto';
import { ReservationsService } from '../reservations/reservations.service';
import { TableStatusEnum } from '../table-status/table-status-enum';
import { TableStatusService } from '../table-status/table-status.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class DevDataInitializerService {
    constructor(
        @Inject(CaffeeBuildingsService) private readonly buildingService: CaffeeBuildingsService,
        @Inject(CaffeeTablesService) private readonly tableService: CaffeeTablesService,
        @Inject(CoffeesService) private readonly coffeeService: CoffeesService,
        @Inject(ReservationStatusService) private readonly reservationStatusService: ReservationStatusService,
        @Inject(ReservationsService) private readonly reservationService: ReservationsService,
        @Inject(TableStatusService) private readonly tableStatusService: TableStatusService,
        @Inject(UsersService) private readonly userService: UsersService,
    ) { }

    createInstancesIfDoNotExist = async () => {
        await this.createBuildingIfDoesNotExist();
        await this.createReservationStatusesIfDoNotExist();
        await this.createTableStatusesIfDoNotExist();
        await this.createUsersIfDoNotExist();
        await this.createCoffeesIfDoNotExist();
        await this.createTablesIfDoNotExist();
        await this.createReservationsIfDoNotExist();
    }

    createBuildingIfDoesNotExist = async () => {
        const buildingsCount = await this.buildingService.count();

        if (buildingsCount) {
            return await Promise.resolve();
        }

        const buildingDto = {
            city: 'Opole',
            zipcode: '45-000',
            street: 'Krakowska',
            buildingNumber: '5a',
            floor: null,
            phone: '123567234',
            openHour: 6,
            closeHour: 20,
        };
        return await this.buildingService.create(buildingDto);
    }

    createReservationStatusesIfDoNotExist = async () => {
        const reservationStatusCount = await this.reservationStatusService.count();

        if (reservationStatusCount > 0) {
            return await Promise.resolve();
        }

        const statuses: string[] = StringEnumToArray(ReservationStatusEnum);
        statuses.forEach(async (status) => {
            const statusDto: CreateReservationStatusDto = {
                name: ReservationStatusEnum[status],
            };
            await this.reservationStatusService.create(statusDto);
        });

        return await Promise.resolve();
    }

    createTableStatusesIfDoNotExist = async () => {
        const tableStatusCount = await this.tableStatusService.count();

        if (tableStatusCount) {
            return await Promise.resolve();
        }

        const statuses: string[] = StringEnumToArray(TableStatusEnum);
        statuses.forEach(async (status) => {
            const statusDto = {
                name: TableStatusEnum[status],
            };

            await this.tableStatusService.create(statusDto);
        });

        return await Promise.resolve();
    }

    createUsersIfDoNotExist = async () => {
        const usersCount = await this.userService.count();

        if (usersCount) {
            return await Promise.resolve();
        }

        const userDtoArray: CreateUserDto[] = [
            {
                firstName: 'Jan',
                lastName: 'Janecki',
                phoneVerified: true,
                phone: '103234123',
                email: 'asdasd@asd.pl',
                passwordHash: 'hash',
                roles: [{ name: 'client' }],
            },
            {
                firstName: 'Marcin',
                lastName: 'Marny',
                phoneVerified: true,
                phone: '973234123',
                email: 'qweqwe@qwe.pl',
                passwordHash: 'hash',
                roles: [{ name: 'admin' }],
            },
        ];

        userDtoArray.forEach(async (user) => {
            await this.userService.create(user);
        })
    }

    createCoffeesIfDoNotExist = async () => {
        const coffeesCount = await this.coffeeService.count();

        if (coffeesCount) {
            return await Promise.resolve();
        }

        const coffeeDtoArray: CreateCoffeeDto[] = [
            {
                details: '',
                name: 'Mocha',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Arabica',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Robusta',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Black',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Latte',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Espresso',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Cappuccino',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Americano',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
            {
                details: '',
                name: 'Doppio',
                preview: '/public/images/products/coffee.png',
                price: 10.0,
            },
        ];

        coffeeDtoArray.forEach(async (coffee) => {
            await this.coffeeService.create(coffee);
        });
    }

    createTablesIfDoNotExist = async () => {
        const tablesCount = await this.tableService.count();

        if (tablesCount) {
            return await Promise.resolve();
        }

        const tableDtoArray: CreateCaffeeTableDto[] = [
            {
                name: 'pierwszy',
                sitsNumber: 2,
                tableStatus: { name: TableStatusEnum.AVAILABLE },
                tags: [{ name: 'gniazdko' }, { name: 'przy_oknie' }, { name: 'sofa' }],
                caffeeBuilding: null,
            },
        ];

        tableDtoArray.forEach(async (table) => {
            await this.tableService.create(table);
        });
    }

    createReservationsIfDoNotExist = async () => {
        const reservationsCount = await this.reservationService.count();

        if (reservationsCount) {
            return await Promise.resolve();
        }

        const reservationDtoArray: CreateReservationDto[] = [
            {
                endTime: moment().add(4, 'h').toDate(),
                startTime: moment().add(2, 'h').toDate(),
                sits: 1,
                user: {
                    email: 'kp.pajor@gmail.com',
                    firstName: 'Alojzy',
                    lastName: 'Tak',
                    passwordHash: 'hash',
                    phone: '123123123',
                    phoneVerified: false,
                    roles: [{ name: 'client' }],
                }
            },
        ];

        reservationDtoArray.forEach(async (reservation) => {
            await this.reservationService.create(reservation);
        });
    }

}
