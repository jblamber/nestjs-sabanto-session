import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Tractor extends InMemoryDBEntity {
  //id: string automatically added by library
  name: string;
  model: string;
}
