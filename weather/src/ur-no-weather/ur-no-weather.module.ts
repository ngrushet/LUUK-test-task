import { Module } from '@nestjs/common';
import { UrNoWeatherService } from './ur-no-weather.service';
import { UrNoWeatherController } from './ur-no-weather.controller';

@Module({
  controllers: [UrNoWeatherController],
  providers: [UrNoWeatherService],
})
export class UrNoWeatherModule {}
