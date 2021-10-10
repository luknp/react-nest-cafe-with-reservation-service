import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateCaffeeBuildingDto } from './dto/create-caffee-building.dto';
import { UpdateCaffeeBuildingDto } from './dto/update-caffee-building.dto';
import { CaffeeBuilding } from './entities/caffee-building.entity';

@Injectable()
export class CaffeeBuildingsService {
  constructor(
    @InjectRepository(CaffeeBuilding)
    private buildingRepository: Repository<CaffeeBuilding>,
    private connection: Connection,
  ) { }

  create(createCaffeeBuildingDto: CreateCaffeeBuildingDto) {
    return this.buildingRepository.save(createCaffeeBuildingDto);
  }

  findAll() {
    return this.buildingRepository.find();
  }

  findOne(id: number) {
    return this.buildingRepository.findOne(id);
  }

  update(id: number, updateCaffeeBuildingDto: UpdateCaffeeBuildingDto) {
    return this.buildingRepository.update({ id }, updateCaffeeBuildingDto);
  }

  remove(id: number) {
    return this.buildingRepository.delete(id);
  }

  count() {
    return this.buildingRepository.count();
  }
}
