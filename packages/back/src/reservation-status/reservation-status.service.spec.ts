import { Test, TestingModule } from '@nestjs/testing';
import { ReservationStatusService } from './reservation-status.service';

describe('ReservationStatusService', () => {
  let service: ReservationStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationStatusService],
    }).compile();

    service = module.get<ReservationStatusService>(ReservationStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
