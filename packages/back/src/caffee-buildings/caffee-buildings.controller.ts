import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CaffeeBuildingsService } from './caffee-buildings.service';
import { CreateCaffeeBuildingDto } from './dto/create-caffee-building.dto';
import { UpdateCaffeeBuildingDto } from './dto/update-caffee-building.dto';

@Controller('caffee-buildings')
export class CaffeeBuildingsController {
  constructor(private readonly caffeeBuildingsService: CaffeeBuildingsService) {}

  @Post()
  create(@Body() createCaffeeBuildingDto: CreateCaffeeBuildingDto) {
    return this.caffeeBuildingsService.create(createCaffeeBuildingDto);
  }

  @Get()
  findAll() {
    return this.caffeeBuildingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caffeeBuildingsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCaffeeBuildingDto: UpdateCaffeeBuildingDto) {
    return this.caffeeBuildingsService.update(+id, updateCaffeeBuildingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caffeeBuildingsService.remove(+id);
  }
}
