import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sabantoRocks(): string {
    return 'Sabanto Rocks';
  }

  //Create a list of fibbonacci numbers
  fibbonacci() {
    return [];
  }
}
