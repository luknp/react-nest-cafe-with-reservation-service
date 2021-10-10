import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateUserDto } from '../../users/dto/create-user.dto';
import { Reservation } from '../entities/reservation.entity';

export class CreateReservationDto extends OmitType(Reservation, Reservation['id'])
{
    @ApiProperty()
    user: CreateUserDto;
    
    @ApiProperty()
    startTime: Date;
    
    @ApiProperty()
    endTime: Date;

    @ApiProperty()
    sits: number;
}
