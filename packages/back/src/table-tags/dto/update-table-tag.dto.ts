import { PartialType } from '@nestjs/mapped-types';
import { CreateTableTagDto } from './create-table-tag.dto';

export class UpdateTableTagDto extends PartialType(CreateTableTagDto) {}
