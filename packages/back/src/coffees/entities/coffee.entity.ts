import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CoffeeImage } from '../../coffee-images/entities/coffee-image.entity';

@Entity()
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    preview: string;

    @Column()
    details: string;

    @OneToMany(() => CoffeeImage, (image) => image.coffee)
    images: CoffeeImage[];
}
