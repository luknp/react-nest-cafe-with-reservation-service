import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OmitType } from '@nestjs/swagger/dist/type-helpers/omit-type.helper';
import { CreateCoffeeImageDto } from '../../coffee-images/dto/create-coffee-image.dto';
import { Coffee } from '../entities/coffee.entity';

export class CreateCoffeeDto extends OmitType(Coffee, Coffee['id'])
{
    @ApiPropertyOptional()
    id?: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    preview: string;

    @ApiProperty()
    details: string;

    @ApiPropertyOptional()
    images?: CreateCoffeeImageDto[];
}
