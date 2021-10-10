import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { CreateCaffeeBuildingDto } from '../../caffee-buildings/dto/create-caffee-building.dto';
import { CreateTableStatusDto } from '../../table-status/dto/create-table-status.dto';
import { CreateTableTagDto } from '../../table-tags/dto/create-table-tag.dto';
import { CaffeeTable } from '../entities/caffee-table.entity';

export class CreateCaffeeTableDto extends OmitType(CaffeeTable, CaffeeTable['id'])
{
    @ApiPropertyOptional()
    id?: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    sitsNumber: number;

    @ApiPropertyOptional()
    tableStatus: CreateTableStatusDto;

    @ApiPropertyOptional()
    tags?: CreateTableTagDto[];

    @ApiProperty()
    caffeeBuilding: CreateCaffeeBuildingDto;
}
