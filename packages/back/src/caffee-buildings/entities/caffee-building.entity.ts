import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CaffeeBuilding {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    zipcode: string;

    @Column()
    street: string;

    @Column()
    buildingNumber: string;

    @Column({ nullable: true })
    floor?: string;

    @Column()
    phone: string;

    @Column()
    openHour: number;

    @Column()
    closeHour: number;
}
