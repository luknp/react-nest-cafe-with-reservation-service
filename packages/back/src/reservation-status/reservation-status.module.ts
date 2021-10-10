import { Module } from '@nestjs/common';
import { ReservationStatusService } from './reservation-status.service';
import { ReservationStatusController } from './reservation-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationStatus } from './entities/reservation-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationStatus])],
  controllers: [ReservationStatusController],
  providers: [ReservationStatusService],
  exports: [ReservationStatusService]
})
export class ReservationStatusModule { }
