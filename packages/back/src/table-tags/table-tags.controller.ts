import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TableTagsService } from './table-tags.service';
import { CreateTableTagDto } from './dto/create-table-tag.dto';
import { UpdateTableTagDto } from './dto/update-table-tag.dto';

@Controller('table-tags')
export class TableTagsController {
  constructor(private readonly tableTagsService: TableTagsService) {}

  @Post()
  create(@Body() createTableTagDto: CreateTableTagDto) {
    return this.tableTagsService.create(createTableTagDto);
  }

  @Get()
  findAll() {
    return this.tableTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableTagsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTableTagDto: UpdateTableTagDto) {
    return this.tableTagsService.update(+id, updateTableTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableTagsService.remove(+id);
  }
}
