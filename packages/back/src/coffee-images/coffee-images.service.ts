import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { CreateCoffeeImageDto } from './dto/create-coffee-image.dto';
import { UpdateCoffeeImageDto } from './dto/update-coffee-image.dto';
import { CoffeeImage } from './entities/coffee-image.entity';

@Injectable()
export class CoffeeImagesService {
  constructor(
    @InjectRepository(CoffeeImage)
    private coffeeImagesRepository: Repository<CoffeeImage>,
    private connection: Connection,
  ) { }

  create(createCoffeeImageDto: CreateCoffeeImageDto) {
    return this.coffeeImagesRepository.save(createCoffeeImageDto);
  }

  findAll() {
    return this.coffeeImagesRepository.find();
  }

  findOne(id: number) {
    return this.coffeeImagesRepository.findOne(id);
  }

  update(id: number, updateCoffeeImageDto: UpdateCoffeeImageDto) {
    return this.coffeeImagesRepository.update({ id }, updateCoffeeImageDto);
  }

  remove(id: number) {
    return this.coffeeImagesRepository.delete(id);
  }
}
