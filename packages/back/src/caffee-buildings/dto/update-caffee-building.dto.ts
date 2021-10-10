import { PartialType } from '@nestjs/mapped-types';
import { CreateCaffeeBuildingDto } from './create-caffee-building.dto';

export class UpdateCaffeeBuildingDto extends PartialType(CreateCaffeeBuildingDto) {}
