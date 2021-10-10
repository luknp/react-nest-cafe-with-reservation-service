import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeImagesService } from './coffee-images.service';

describe('CoffeeImagesService', () => {
  let service: CoffeeImagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeImagesService],
    }).compile();

    service = module.get<CoffeeImagesService>(CoffeeImagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
