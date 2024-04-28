import { Injectable } from '@nestjs/common';
import { CreateUrNoWeatherDto } from './dto/create-ur-no-weather.dto';
import { UpdateUrNoWeatherDto } from './dto/update-ur-no-weather.dto';

@Injectable()
export class UrNoWeatherService {
  create(createUrNoWeatherDto: CreateUrNoWeatherDto) {
    return 'This action adds a new urNoWeather';
  }

  findAll() {
    return `This action returns all urNoWeather`;
  }

  findOne(id: number) {
    return `This action returns a #${id} urNoWeather`;
  }

  update(id: number, updateUrNoWeatherDto: UpdateUrNoWeatherDto) {
    return `This action updates a #${id} urNoWeather`;
  }

  remove(id: number) {
    return `This action removes a #${id} urNoWeather`;
  }
}
