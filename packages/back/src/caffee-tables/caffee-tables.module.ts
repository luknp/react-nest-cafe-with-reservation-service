import { Module } from '@nestjs/common';
import { CaffeeTablesService } from './caffee-tables.service';
import { CaffeeTablesController } from './caffee-tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaffeeTable } from './entities/caffee-table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CaffeeTable])],
  controllers: [CaffeeTablesController],
  providers: [CaffeeTablesService],
  exports: [CaffeeTablesService]
})
export class CaffeeTablesModule { }
