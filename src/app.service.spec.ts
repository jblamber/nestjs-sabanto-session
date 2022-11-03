import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();
  });

  describe('fibonacci test', () => {
    it('should return a fibbonacci"', () => {
      const appService = app.get(AppService);
      expect(appService.fibbonacci).toBeTruthy();
    });
  });
});
