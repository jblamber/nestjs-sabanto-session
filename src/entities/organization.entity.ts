import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Organization extends InMemoryDBEntity {
  //id: string automatically added by library
  emailAddress: string;
}
