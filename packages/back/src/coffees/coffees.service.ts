import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    constructor(
        @InjectRepository(Coffee)
        private coffeesRepository: Repository<Coffee>,
        private connection: Connection,
    ) { }

    async create(coffee: CreateCoffeeDto) {
        await this.connection.transaction(async (manager) => {
            return manager.save(this.coffeesRepository.create(coffee));
        });
    }

    findAll(): Promise<Coffee[]> {
        return this.coffeesRepository.find();
    }

    findOne(id: number): Promise<Coffee> {
        return this.coffeesRepository.findOne(id);
    }

    update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesRepository.update({ id }, updateCoffeeDto);
    }

    async remove(id: number) {
        return await this.coffeesRepository.delete(id);
    }

    count() {
        return this.coffeesRepository.count();
    }
}
