import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TableStatusEnum } from '../table-status-enum';

@Entity()
export class TableStatus {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: TableStatusEnum;

    @Column({ nullable: true })
    description?: string;
}
