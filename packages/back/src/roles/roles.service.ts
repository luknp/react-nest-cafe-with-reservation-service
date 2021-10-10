import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
    private connection: Connection,
  ) { }

  async createMany(roles: Role[]) {
    await this.connection.transaction(async manager => {
      roles.forEach(async (role) => await manager.save(role));
    });
  }

  create(role: CreateRoleDto) {
    return this.rolesRepository.save(role);
  }

  findAll() {
    return this.rolesRepository.find();
  }

  findOne(name: string) {
    return this.rolesRepository.findOne({name});
  }

  update(name: string, updateRoleDto: UpdateRoleDto) {
    return this.rolesRepository.update({ name }, updateRoleDto);
  }

  remove(name: string) {
    return this.rolesRepository.delete(name);
  }
}
