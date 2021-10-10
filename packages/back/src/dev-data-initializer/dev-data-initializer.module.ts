import { Module } from '@nestjs/common';
import { CaffeeBuildingsModule } from '../caffee-buildings/caffee-buildings.module';
import { CaffeeBuildingsService } from '../caffee-buildings/caffee-buildings.service';
import { CaffeeTablesModule } from '../caffee-tables/caffee-tables.module';
import { CaffeeTablesService } from '../caffee-tables/caffee-tables.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { CoffeesService } from '../coffees/coffees.service';
import { ReservationStatusModule } from '../reservation-status/reservation-status.module';
import { ReservationStatusService } from '../reservation-status/reservation-status.service';
import { ReservationsModule } from '../reservations/reservations.module';
import { ReservationsService } from '../reservations/reservations.service';
import { TableStatusModule } from '../table-status/table-status.module';
import { TableStatusService } from '../table-status/table-status.service';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { DevDataInitializerService } from './dev-data-initializer.service';

@Module({
  imports: [
    CaffeeBuildingsModule,
    CaffeeTablesModule,
    CoffeesModule,
    ReservationStatusModule,
    ReservationsModule,
    TableStatusModule,
    UsersModule,
  ],
  providers: [
    DevDataInitializerService,
  ],
})
export class DevDataInitializerModule { }
