import { Test, TestingModule } from '@nestjs/testing';
import { CaffeeTablesService } from './caffee-tables.service';

describe('CaffeeTablesService', () => {
  let service: CaffeeTablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaffeeTablesService],
    }).compile();

    service = module.get<CaffeeTablesService>(CaffeeTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
