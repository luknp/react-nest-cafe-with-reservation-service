import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TableStatusService } from './table-status.service';
import { CreateTableStatusDto } from './dto/create-table-status.dto';
import { UpdateTableStatusDto } from './dto/update-table-status.dto';
import { TableStatusEnum } from './table-status-enum';

@Controller('table-status')
export class TableStatusController {
  constructor(private readonly tableStatusService: TableStatusService) {}

  @Post()
  create(@Body() createTableStatusDto: CreateTableStatusDto) {
    return this.tableStatusService.create(createTableStatusDto);
  }

  @Get()
  findAll() {
    return this.tableStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') name: string) {
    return this.tableStatusService.findOne(TableStatusEnum[name]);
  }

  @Put(':id')
  update(@Param('id') name: string, @Body() updateTableStatusDto: UpdateTableStatusDto) {
    return this.tableStatusService.update(TableStatusEnum[name], updateTableStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') name: string) {
    return this.tableStatusService.remove(TableStatusEnum[name]);
  }
}
