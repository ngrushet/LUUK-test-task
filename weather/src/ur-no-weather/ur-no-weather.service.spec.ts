import { Test, TestingModule } from '@nestjs/testing';
import { UrNoWeatherService } from './ur-no-weather.service';

describe('UrNoWeatherService', () => {
  let service: UrNoWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrNoWeatherService],
    }).compile();

    service = module.get<UrNoWeatherService>(UrNoWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
