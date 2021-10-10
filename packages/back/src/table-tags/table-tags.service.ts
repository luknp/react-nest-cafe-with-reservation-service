import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateTableTagDto } from './dto/create-table-tag.dto';
import { UpdateTableTagDto } from './dto/update-table-tag.dto';
import { TableTag } from './entities/table-tag.entity';

@Injectable()
export class TableTagsService {
  constructor(
    @InjectRepository(TableTag)
    private tagsRepository: Repository<TableTag>,
    private connection: Connection,
  ) { }

  create(createTableTagDto: CreateTableTagDto) {
    return this.tagsRepository.save(createTableTagDto);
  }

  findAll() {
    return this.tagsRepository.find();
  }

  findOne(id: number) {
    return this.tagsRepository.findOne(id);
  }

  update(id: number, updateTableTagDto: UpdateTableTagDto) {
    return this.tagsRepository.update({ id }, updateTableTagDto);
  }

  remove(id: number) {
    return this.tagsRepository.delete(id);
  }
}
