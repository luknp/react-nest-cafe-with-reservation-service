import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateReservationStatusDto } from './dto/create-reservation-status.dto';
import { UpdateReservationStatusDto } from './dto/update-reservation-status.dto';
import { ReservationStatus } from './entities/reservation-status.entity';
import { ReservationStatusEnum } from './reservation-status-enum';

@Injectable()
export class ReservationStatusService {
  constructor(
    @InjectRepository(ReservationStatus)
    private statusRepository: Repository<ReservationStatus>,
    private connection: Connection,
  ) { }

  create(createReservationStatusDto: CreateReservationStatusDto) {
    return this.statusRepository.save(this.statusRepository.create(createReservationStatusDto));
  }

  findAll() {
    return this.statusRepository.find();
  }

  findOne(name: string) {
    return this.statusRepository.findOne({name: ReservationStatusEnum[name]});
  }

  update(name: string, updateReservationStatusDto: UpdateReservationStatusDto) {
    return this.statusRepository.update({ name: ReservationStatusEnum[name] }, updateReservationStatusDto);
  }

  remove(id: number) {
    return this.statusRepository.delete(id);
  }

  async count() {
    return await this.statusRepository.count();
  }
}
