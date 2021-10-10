import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Role } from '../roles/entities/role.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private connection: Connection,
    ) { }

    async create(user: CreateUserDto) {
        try {
            return await this.connection.transaction(async manager => {
                const roleArray: Role[] = [];
                user.roles.forEach(async (role) => {
                    const roleRepo = manager.getRepository(Role);
                    let roleInstance = roleRepo.create(role);

                    const result = await roleRepo.save<Role>(roleInstance);
                    roleArray.push(result);
                });
                const userInstance = this.usersRepository.create(user);
                await manager.getRepository(User).save(userInstance);
                userInstance.roles = roleArray;
                await manager.getRepository(User).save(userInstance);
            });
        } catch (e) {
            console.log((e as Error).message);
        }
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.usersRepository.findOne(id);
    }


    findOneByEmail(email: string): Promise<User> {
        return this.usersRepository.findOne({ where: { email } });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.usersRepository.update({ id }, updateUserDto);
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    count() {
        return this.usersRepository.count();
    }
}
