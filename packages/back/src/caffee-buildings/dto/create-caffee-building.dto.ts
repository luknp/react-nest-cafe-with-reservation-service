import { OmitType } from '@nestjs/swagger';
import { CaffeeBuilding } from '../entities/caffee-building.entity';

export class CreateCaffeeBuildingDto extends OmitType(CaffeeBuilding, CaffeeBuilding['id'])
{ }
