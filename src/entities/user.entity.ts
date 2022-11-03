import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface User extends InMemoryDBEntity {
  //id: string automatically added by library
  name: string;
}
