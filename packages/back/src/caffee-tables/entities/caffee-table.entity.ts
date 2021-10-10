import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CaffeeBuilding } from '../../caffee-buildings/entities/caffee-building.entity';
import { TableStatus } from '../../table-status/entities/table-status.entity';
import { TableTag } from '../../table-tags/entities/table-tag.entity';

@Entity()
export class CaffeeTable {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    sitsNumber: number;

    @ManyToOne(() => CaffeeBuilding)
    caffeeBuilding: CaffeeBuilding;


    @ManyToOne(() => TableStatus)
    tableStatus: TableStatus;

    @ManyToMany(() => TableTag, tag => tag.tables)
    @JoinTable()
    tags: TableTag[];
}
