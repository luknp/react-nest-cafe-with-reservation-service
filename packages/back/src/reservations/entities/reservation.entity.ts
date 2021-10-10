import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CaffeeTable } from '../../caffee-tables/entities/caffee-table.entity';
import { ReservationStatus } from '../../reservation-status/entities/reservation-status.entity';
import { User } from '../../users/user.entity';

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    user: User;

    @Column()
    startTime: Date;
    
    @Column()
    endTime: Date;
    
    @Column()
    sits: number;

    @ManyToOne(() => ReservationStatus)
    status: ReservationStatus;

    @ManyToMany(() => CaffeeTable)
    @JoinTable()
    caffeeTables: CaffeeTable[];
}
