import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { TableStatus } from '../entities/table-status.entity';
import { TableStatusEnum } from '../table-status-enum';

export class CreateTableStatusDto extends OmitType(TableStatus, TableStatus['id'])
{
    @ApiPropertyOptional()
    id?: number;

    @ApiProperty()
    name: TableStatusEnum;

    @ApiPropertyOptional()
    description?: string;
}
