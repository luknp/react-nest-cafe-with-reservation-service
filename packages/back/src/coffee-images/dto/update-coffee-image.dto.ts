import { PartialType } from '@nestjs/swagger/dist/type-helpers/partial-type.helper';
import { CreateCoffeeImageDto } from './create-coffee-image.dto';

export class UpdateCoffeeImageDto extends PartialType(CreateCoffeeImageDto) {}
