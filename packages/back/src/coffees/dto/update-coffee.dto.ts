import { PartialType } from '@nestjs/swagger/dist/type-helpers/partial-type.helper';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(
    CreateCoffeeDto
) {}
