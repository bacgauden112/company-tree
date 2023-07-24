import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';

@Module({
  providers: [TravelsService],
  exports: [TravelsService],
})
export class TravelsModule {}
