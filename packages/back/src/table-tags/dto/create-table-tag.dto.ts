import { OmitType } from '@nestjs/swagger';
import { TableTag } from '../entities/table-tag.entity';

export class CreateTableTagDto extends OmitType(TableTag, TableTag['id'])
{ }
