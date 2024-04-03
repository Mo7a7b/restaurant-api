/* eslint-disable prettier/prettier */
import { Menu } from 'src/menu/entities/menu.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity({ name: 'meal' })
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @Column()
  img: string;
  @Column({ name: 'menu_id' })
  menuId: number;
  @ManyToOne(() => Menu, (menus) => menus.meals)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;
}
