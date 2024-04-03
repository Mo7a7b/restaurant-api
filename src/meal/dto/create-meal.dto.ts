/* eslint-disable prettier/prettier */
import { IsNumber, IsString, Length } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateMealDto {
  @IsString()
  @Length(3, 20)
  name: string;
  @IsNumber()
  price: number;
  @Length(5, 200)
  @IsString()
  description: string;
  @IsString()
  img: string;
}
