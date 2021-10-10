import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateTableStatusDto } from './dto/create-table-status.dto';
import { UpdateTableStatusDto } from './dto/update-table-status.dto';
import { TableStatus } from './entities/table-status.entity';
import { TableStatusEnum } from './table-status-enum';

@Injectable()
export class TableStatusService {
  constructor(
    @InjectRepository(TableStatus)
    private tableStatusRepository: Repository<TableStatus>,
    private connection: Connection,
  ) { }

  create(createTableStatusDto: CreateTableStatusDto) {
    return this.tableStatusRepository.save(this.tableStatusRepository.create(createTableStatusDto));
  }

  findAll() {
    return this.tableStatusRepository.find();
  }

  findOne(name: TableStatusEnum) {
    return this.tableStatusRepository.findOne({ name });
  }

  update(name: TableStatusEnum, updateTableStatusDto: UpdateTableStatusDto) {
    return this.tableStatusRepository.update({ name }, updateTableStatusDto);
  }

  remove(name: TableStatusEnum) {
    return this.tableStatusRepository.delete({ name });
  }

  count() {
    return this.tableStatusRepository.count();
  }
}
