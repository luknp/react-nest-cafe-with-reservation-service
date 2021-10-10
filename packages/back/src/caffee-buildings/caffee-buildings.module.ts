import { Module } from '@nestjs/common';
import { CaffeeBuildingsService } from './caffee-buildings.service';
import { CaffeeBuildingsController } from './caffee-buildings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaffeeBuilding } from './entities/caffee-building.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaffeeBuilding])],
  controllers: [CaffeeBuildingsController],
  providers: [CaffeeBuildingsService],
  exports: [CaffeeBuildingsService]
})
export class CaffeeBuildingsModule { }
