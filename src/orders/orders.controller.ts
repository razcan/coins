import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { CreateDetailsOrderDto } from './dto/createdetails-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../orders/entities/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService,
    ) {}


  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    console.log('din controller',createOrderDto);
    this.ordersService.create(createOrderDto);
    // return {
    //   message: 'Order and data uploaded successfully',
    //   data: createOrderDto // This contains the DTO data
    // };
     //return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
