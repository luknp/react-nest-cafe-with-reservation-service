import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { ReservationStatus } from '../entities/reservation-status.entity';
import { ReservationStatusEnum } from '../reservation-status-enum';


export class CreateReservationStatusDto extends OmitType(ReservationStatus, ReservationStatus['id'])
{
    @ApiProperty({enum: ReservationStatusEnum, type: 'string'})
    name: ReservationStatusEnum;

    @ApiPropertyOptional()
    description?: string;
}
