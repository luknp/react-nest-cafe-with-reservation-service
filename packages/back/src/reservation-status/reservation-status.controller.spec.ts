import { Test, TestingModule } from '@nestjs/testing';
import { ReservationStatusController } from './reservation-status.controller';
import { ReservationStatusService } from './reservation-status.service';

describe('ReservationStatusController', () => {
  let controller: ReservationStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationStatusController],
      providers: [ReservationStatusService],
    }).compile();

    controller = module.get<ReservationStatusController>(ReservationStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
