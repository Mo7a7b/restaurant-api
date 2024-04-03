/* eslint-disable prettier/prettier */
import { IsString, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateMenuDto {
  @IsString()
  @Length(3,50)
  name: string;
}
