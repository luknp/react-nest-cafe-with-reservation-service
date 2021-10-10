import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { CreateRoleDto } from '../../roles/dto/create-role.dto';
import { User } from '../user.entity';

export class CreateUserDto extends OmitType(User, User['id'])
{
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty({ default: true })
    phoneVerified: boolean;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    passwordHash: string;

    @ApiPropertyOptional()
    roles: CreateRoleDto[];
}
