import { PartialType } from '@nestjs/mapped-types';
import { CreateCaffeeTableDto } from './create-caffee-table.dto';

export class UpdateCaffeeTableDto extends PartialType(CreateCaffeeTableDto) {}
