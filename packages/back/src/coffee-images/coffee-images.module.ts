import { Module } from '@nestjs/common';
import { CoffeeImagesService } from './coffee-images.service';
import { CoffeeImagesController } from './coffee-images.controller';
import { CoffeeImage } from './entities/coffee-image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([CoffeeImage]),
  ],
  controllers: [CoffeeImagesController],
  providers: [CoffeeImagesService]
})
export class CoffeeImagesModule {}
