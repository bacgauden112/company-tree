import { Injectable } from '@nestjs/common';
import { Company } from './models/company.model';
import { CompaniesResponse } from './response/companies.response';
import { TravelsService } from '../travels/travels.service';

@Injectable()
export class CompaniesService {
  private companies: Company[];
  constructor(private readonly travelsService: TravelsService) {
    this.fetchCompanies().then((companies) => {
      this.companies = companies;
    });
  }

  getCompanies(): Company[] {
    return this.companies;
  }

  findAll(): CompaniesResponse[] {
    const dataMapped = this.getNestedCompanies('0');
    return dataMapped;
  }

  async fetchCompanies(): Promise<Company[]> {
    const response = await fetch(
      'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/companies',
    );
    let data: Company[] = await response.json();
    data = data.map((company: Company) => {
      company.createdAt = new Date(company.createdAt);
      return company;
    });

    return data;
  }

  private getNestedCompanies(parentId: string): CompaniesResponse[] {
    const filteredCompanies = this.getCompanies().filter(
      (company) => company.parentId === parentId,
    );

    return filteredCompanies.map((company) => {
      const filteredTravels = this.travelsService
        .getTravels()
        .filter((travel) => travel.companyId === company.id);
      const children = this.getNestedCompanies(company.id);
      let childCost = 0;
      if (children.length > 0) {
        childCost = children.reduce((acc, child) => acc + child.cost, 0);
      }
      const cost = filteredTravels.reduce(
        (acc, travel) => acc + Number(travel.price),
        childCost,
      );
      return {
        ...company,
        cost,
        children,
      };
    });
  }
}
