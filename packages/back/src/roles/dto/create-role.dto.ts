import { ApiProperty, OmitType } from '@nestjs/swagger';
import { Role } from '../entities/role.entity';

export class CreateRoleDto extends OmitType(Role, Role['id'])
{
    @ApiProperty()
    name: string;
}
