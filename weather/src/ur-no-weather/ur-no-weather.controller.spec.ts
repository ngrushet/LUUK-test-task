import { Test, TestingModule } from '@nestjs/testing';
import { UrNoWeatherController } from './ur-no-weather.controller';
import { UrNoWeatherService } from './ur-no-weather.service';

describe('UrNoWeatherController', () => {
  let controller: UrNoWeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrNoWeatherController],
      providers: [UrNoWeatherService],
    }).compile();

    controller = module.get<UrNoWeatherController>(UrNoWeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
