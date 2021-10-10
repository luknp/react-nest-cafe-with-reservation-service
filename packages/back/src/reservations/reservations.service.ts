import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';
import { Repository, Connection, MoreThanOrEqual, Between, Not, FindConditions } from 'typeorm';
import { CaffeeTable } from '../caffee-tables/entities/caffee-table.entity';
import { ErrorResponse } from '../common/ErrorResponse';
import { ReservationStatus } from '../reservation-status/entities/reservation-status.entity';
import { ReservationStatusEnum } from '../reservation-status/reservation-status-enum';
import { TableStatusEnum } from '../table-status/table-status-enum';
import { User } from '../users/user.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
    constructor(
        @InjectRepository(Reservation)
        private reservationsRepository: Repository<Reservation>,
        private connection: Connection,
    ) { }


    private validateDateRange = (reservationTimeRange: [Date, Date]) => {
        const now = moment();
        if (reservationTimeRange[0] >= reservationTimeRange[1]
            || moment(reservationTimeRange[0]).add(8, 'h').valueOf() < reservationTimeRange[1].valueOf()) {
            return new ErrorResponse(new Error('Błędny zakres dat!'));
        }

        if (now.add(2, 'hours').valueOf() > reservationTimeRange[0].valueOf()) {
            return new ErrorResponse(new Error('Rezerwacja dozwolona 2 godziny przed wybranym terminem!'));
        }
        if (now.add(3, 'days').endOf('day').valueOf() < reservationTimeRange[0].valueOf()) {
            return new ErrorResponse(new Error('Rezerwacja dozwolona maksymalnie 3 dni do przodu!'));
        }
        return true;
    }
    // walidacja daty
    // min data 2h w przod i max pełne 3 dni
    // walidacja dostepnosci stolikow
    // stolik nieuszkodzony
    // czy wolna ilość miejsc na stoliki na podany zakres czasu
    // sprawdzenie czy uzytkownik istnieje -> utworzenie go
    // find reserved status
    // utworzenie rezerwacji
    // kazdy krok z feedbackiem
    async create(createReservationDto: CreateReservationDto): Promise<Reservation | ErrorResponse> {
        const reservationTimeRange: [Date, Date] = [createReservationDto.startTime, createReservationDto.endTime];

        const dateRangeValidator = this.validateDateRange(reservationTimeRange);
        if (dateRangeValidator !== true) {
            // return dateRangeValidator;
        }

        try {
            const [currentReservations, currentReservationsCount] = await this.reservationsRepository.findAndCount({
                where: {
                    startTime: Between(reservationTimeRange[0], reservationTimeRange[1]),
                },
                relations: [
                    'status',
                    'caffeeTables',
                ],
            });

            if (currentReservationsCount > 0) {
                return new ErrorResponse(new Error('Brak miejsc w tym terminie!'));
            }

            const [tables, tablesCount] = await this.connection.getRepository(CaffeeTable).findAndCount({
                where: {
                    sitsNumber: MoreThanOrEqual(createReservationDto.sits),
                    // tableStatus: TableStatusEnum.AVAILABLE,
                },
            });

            if (tablesCount === 0) {
                return new ErrorResponse(new Error('Brak miejsc w tym terminie!'));
            }

            const userRepo = this.connection.getRepository(User);
            let resultUser = await userRepo.findOne({ where: { email: createReservationDto.user.email } });
            if (resultUser === undefined) {
                resultUser = userRepo.create(createReservationDto.user);
                await userRepo.save(resultUser);
            }

            const reservedStatus = await this.connection.getRepository(ReservationStatus).findOne({ name: ReservationStatusEnum.RESERVED });

            const reservation = this.reservationsRepository.create(createReservationDto);
            reservation.user = resultUser;
            reservation.status = reservedStatus;
            reservation.caffeeTables = [tables[0]];
            await this.reservationsRepository.save(reservation);
        } catch (e) {
            console.log((e as Error).message);
            return new ErrorResponse(new Error('Nieznany błąd!'));
        }
    }

    findAll() {
        return this.reservationsRepository.find();
    }

    async findCurrent() {
        try {
            const now = moment();
            return await this.reservationsRepository.find({
                relations: ['status'],
                where: {
                    startTime: Between(now.toDate(), now.add(3, 'days').endOf('day').toDate()),
                },
            });
        } catch (e) {
            console.log((e as Error).message);
        }
    }

    findOne(id: number) {
        return this.reservationsRepository.findOne(id);
    }

    update(id: number, updateReservationDto: UpdateReservationDto) {
        return this.reservationsRepository.update({ id }, updateReservationDto);
    }

    remove(id: number) {
        return this.reservationsRepository.delete(id);
    }

    count() {
        return this.reservationsRepository.count();
    }
}
