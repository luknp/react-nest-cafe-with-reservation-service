import { Test, TestingModule } from '@nestjs/testing';
import { CaffeeBuildingsService } from './caffee-buildings.service';

describe('CaffeeBuildingsService', () => {
  let service: CaffeeBuildingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaffeeBuildingsService],
    }).compile();

    service = module.get<CaffeeBuildingsService>(CaffeeBuildingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
