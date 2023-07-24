import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';
import { TravelsModule } from '../travels/travels.module';

@Module({
  imports: [TravelsModule],
  providers: [CompaniesResolver, CompaniesService],
})
export class CompaniesModule {}
