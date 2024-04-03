/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body,Param, Delete, Put, ValidationPipe } from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Post('new')
  create(@Body(ValidationPipe) createMealDto: CreateMealDto) {
    return this.mealService.create(createMealDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    return this.mealService.update(+id, updateMealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealService.remove(+id);
  }
}
