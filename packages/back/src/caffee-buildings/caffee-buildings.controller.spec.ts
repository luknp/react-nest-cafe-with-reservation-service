import { Test, TestingModule } from '@nestjs/testing';
import { CaffeeBuildingsController } from './caffee-buildings.controller';
import { CaffeeBuildingsService } from './caffee-buildings.service';

describe('CaffeeBuildingsController', () => {
  let controller: CaffeeBuildingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaffeeBuildingsController],
      providers: [CaffeeBuildingsService],
    }).compile();

    controller = module.get<CaffeeBuildingsController>(CaffeeBuildingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
