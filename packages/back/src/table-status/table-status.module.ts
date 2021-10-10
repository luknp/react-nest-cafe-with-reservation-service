import { Module } from '@nestjs/common';
import { TableStatusService } from './table-status.service';
import { TableStatusController } from './table-status.controller';
import { TableStatus } from './entities/table-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TableStatus])],
  controllers: [TableStatusController],
  providers: [TableStatusService],
  exports: [TableStatusService]
})
export class TableStatusModule { }
