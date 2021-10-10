import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CaffeeTable } from '../../caffee-tables/entities/caffee-table.entity';

@Entity()
export class TableTag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @ManyToMany(() => CaffeeTable, table => table.tags)
    tables: CaffeeTable[];
}
