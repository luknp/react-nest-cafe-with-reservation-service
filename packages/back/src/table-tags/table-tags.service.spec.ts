import { Test, TestingModule } from '@nestjs/testing';
import { TableTagsService } from './table-tags.service';

describe('TableTagsService', () => {
  let service: TableTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableTagsService],
    }).compile();

    service = module.get<TableTagsService>(TableTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
