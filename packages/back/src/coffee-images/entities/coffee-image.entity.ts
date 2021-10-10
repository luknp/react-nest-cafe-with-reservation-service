import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from '../../coffees/entities/coffee.entity';

@Entity()
export class CoffeeImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    alt: string;

    @ManyToOne(() => Coffee, (coffee) => coffee.images)
    coffee: Coffee;
}
