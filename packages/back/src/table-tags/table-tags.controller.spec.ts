import { Test, TestingModule } from '@nestjs/testing';
import { TableTagsController } from './table-tags.controller';
import { TableTagsService } from './table-tags.service';

describe('TableTagsController', () => {
  let controller: TableTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableTagsController],
      providers: [TableTagsService],
    }).compile();

    controller = module.get<TableTagsController>(TableTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
