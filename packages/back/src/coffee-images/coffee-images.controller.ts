import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CoffeeImagesService } from './coffee-images.service';
import { CreateCoffeeImageDto } from './dto/create-coffee-image.dto';
import { UpdateCoffeeImageDto } from './dto/update-coffee-image.dto';

@Controller('coffee-images')
export class CoffeeImagesController {
  constructor(private readonly coffeeImagesService: CoffeeImagesService) {}

  @Post()
  create(@Body() createCoffeeImageDto: CreateCoffeeImageDto) {
    return this.coffeeImagesService.create(createCoffeeImageDto);
  }

  @Get()
  findAll() {
    return this.coffeeImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeImagesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCoffeeImageDto: UpdateCoffeeImageDto) {
    return this.coffeeImagesService.update(+id, updateCoffeeImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeImagesService.remove(+id);
  }
}
