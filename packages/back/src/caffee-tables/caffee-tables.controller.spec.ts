import { Test, TestingModule } from '@nestjs/testing';
import { CaffeeTablesController } from './caffee-tables.controller';
import { CaffeeTablesService } from './caffee-tables.service';

describe('CaffeeTablesController', () => {
  let controller: CaffeeTablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaffeeTablesController],
      providers: [CaffeeTablesService],
    }).compile();

    controller = module.get<CaffeeTablesController>(CaffeeTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
