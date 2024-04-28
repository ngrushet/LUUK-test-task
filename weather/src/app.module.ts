import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrNoWeatherModule } from './ur-no-weather/ur-no-weather.module';

@Module({
  imports: [UrNoWeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
