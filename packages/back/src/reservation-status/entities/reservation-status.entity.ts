import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationStatusEnum } from '../reservation-status-enum';

@Entity()
export class ReservationStatus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "enum", enum: ReservationStatusEnum, default: ReservationStatusEnum.RESERVED, unique: true })
    name: ReservationStatusEnum;

    @Column({ nullable: true })
    description?: string;
}
