/* eslint-disable prettier/prettier */
import { Meal } from 'src/meal/entities/meal.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity({ name: 'menu' })
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @OneToMany(() => Meal, (meals) => meals.menu)
  meals: Meal;
}
