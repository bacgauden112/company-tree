import { Query, Resolver } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { Company } from './models/company.model';
import { CompaniesResponse } from './response/companies.response';

@Resolver((of) => Company)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Query(() => [CompaniesResponse])
  companies(): CompaniesResponse[] {
    return this.companiesService.findAll();
  }
}
