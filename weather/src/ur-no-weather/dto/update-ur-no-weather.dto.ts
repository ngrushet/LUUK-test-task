import { PartialType } from '@nestjs/mapped-types';
import { CreateUrNoWeatherDto } from './create-ur-no-weather.dto';

export class UpdateUrNoWeatherDto extends PartialType(CreateUrNoWeatherDto) {}
