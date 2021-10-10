import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';
import { Role } from '../roles/entities/role.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: true })
    phoneVerified: boolean;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    passwordHash: string;

    @ManyToMany(() => Role, role => role.users)
    @JoinTable()
    roles: Role[];
}
