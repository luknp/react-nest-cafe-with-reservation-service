import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee]),
  ],
  providers: [CoffeesService],
  controllers: [CoffeesController],
  exports: [CoffeesService]
})
export class CoffeesModule { }
