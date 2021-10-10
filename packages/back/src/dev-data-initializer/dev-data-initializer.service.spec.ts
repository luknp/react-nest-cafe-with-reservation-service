import { Test, TestingModule } from '@nestjs/testing';
import { DevDataInitializerService } from './dev-data-initializer.service';

describe('DevDataInitializerService', () => {
  let service: DevDataInitializerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevDataInitializerService],
    }).compile();

    service = module.get<DevDataInitializerService>(DevDataInitializerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
