/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';

@Injectable()
export class MealService {
  constructor(@InjectRepository(Meal) private MealRepo: Repository<Meal>) {}
  async create(createMealDto: CreateMealDto) {
    const meal = await this.MealRepo.save(createMealDto);
    return meal;
  }
  findOne(id: number) {
    const meal = this.MealRepo.findOneBy({ id });
    return meal;
  }

  async update(id: number, updateMealDto: UpdateMealDto) {
    const meal = await this.MealRepo.findOneBy({ id });
    meal.name = updateMealDto.name;
    meal.price = updateMealDto.price;
    meal.description = updateMealDto.description;
    meal.img = updateMealDto.img;
    return await this.MealRepo.save(meal);
  }

  async remove(id: number) {
    await this.MealRepo.delete(id);
    return { message: 'meal deleted successfully' };
  }
}
