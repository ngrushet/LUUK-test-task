import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UrNoWeatherService } from './ur-no-weather.service';
import { CreateUrNoWeatherDto } from './dto/create-ur-no-weather.dto';
import { UpdateUrNoWeatherDto } from './dto/update-ur-no-weather.dto';

@Controller('ur-no-weather')
export class UrNoWeatherController {
  constructor(private readonly urNoWeatherService: UrNoWeatherService) {}

  @Post()
  create(@Body() createUrNoWeatherDto: CreateUrNoWeatherDto) {
    return this.urNoWeatherService.create(createUrNoWeatherDto);
  }

  @Get()
  findAll() {
    return this.urNoWeatherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.urNoWeatherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUrNoWeatherDto: UpdateUrNoWeatherDto) {
    return this.urNoWeatherService.update(+id, updateUrNoWeatherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.urNoWeatherService.remove(+id);
  }
}
