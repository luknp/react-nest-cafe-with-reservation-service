import { OmitType } from '@nestjs/swagger/dist/type-helpers/omit-type.helper';
import { PartialType} from '@nestjs/swagger/dist/type-helpers/partial-type.helper';
import { CoffeeImage } from '../entities/coffee-image.entity';

export class CreateCoffeeImageDto extends PartialType(
    OmitType(CoffeeImage, CoffeeImage['id']),
)
{}
