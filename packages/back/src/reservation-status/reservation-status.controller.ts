import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ReservationStatusService } from './reservation-status.service';
import { CreateReservationStatusDto } from './dto/create-reservation-status.dto';
import { UpdateReservationStatusDto } from './dto/update-reservation-status.dto';

@Controller('reservation-status')
export class ReservationStatusController {
  constructor(private readonly reservationStatusService: ReservationStatusService) {}

  @Post()
  create(@Body() createReservationStatusDto: CreateReservationStatusDto) {
    return this.reservationStatusService.create(createReservationStatusDto);
  }

  @Get()
  findAll() {
    return this.reservationStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationStatusService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateReservationStatusDto: UpdateReservationStatusDto) {
    return this.reservationStatusService.update(id, updateReservationStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationStatusService.remove(+id);
  }
}
