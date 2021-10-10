import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CaffeeTablesService } from './caffee-tables.service';
import { CreateCaffeeTableDto } from './dto/create-caffee-table.dto';
import { UpdateCaffeeTableDto } from './dto/update-caffee-table.dto';

@Controller('caffee-tables')
export class CaffeeTablesController {
  constructor(private readonly caffeeTablesService: CaffeeTablesService) {}

  @Post()
  create(@Body() createCaffeeTableDto: CreateCaffeeTableDto) {
    return this.caffeeTablesService.create(createCaffeeTableDto);
  }

  @Get()
  findAll() {
    return this.caffeeTablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caffeeTablesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCaffeeTableDto: UpdateCaffeeTableDto) {
    return this.caffeeTablesService.update(+id, updateCaffeeTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caffeeTablesService.remove(+id);
  }
}
