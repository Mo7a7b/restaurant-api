/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import e from 'express';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private MenuRepo: Repository<Menu>) {}
  async create(createMenuDto: CreateMenuDto) {
    const menu = await this.MenuRepo.save(createMenuDto);
    return menu;
  }

  findAll() {
    return this.MenuRepo.find({ relations: { meals: true } });
  }

  findOne(id: number) {
    return this.MenuRepo.findOneBy({ id });
  }

  async remove(id: number) {
    await this.MenuRepo.delete(id);
    return { message: 'Menu deleted Successfully' };
  }
}
