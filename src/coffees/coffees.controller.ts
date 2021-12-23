import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This Coffes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action #${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
