import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeImagesController } from './coffee-images.controller';
import { CoffeeImagesService } from './coffee-images.service';

describe('CoffeeImagesController', () => {
  let controller: CoffeeImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeeImagesController],
      providers: [CoffeeImagesService],
    }).compile();

    controller = module.get<CoffeeImagesController>(CoffeeImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
