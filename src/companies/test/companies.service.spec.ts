import { Test, TestingModule } from '@nestjs/testing';
import { TravelsService } from '../../travels/travels.service';
import { CompaniesService } from '../companies.service';
import { companiesMock, resultExpect, travelsMock } from './data';

describe('CompaniesService', () => {
  let companyService: CompaniesService;
  let travelService: TravelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompaniesService, TravelsService],
    }).compile();

    companyService = module.get<CompaniesService>(CompaniesService);
    travelService = module.get<TravelsService>(TravelsService);
  });

  it('should be defined', () => {
    expect(companyService).toBeDefined();
    expect(travelService).toBeDefined();
  });

  describe('companies', () => {
    it('should return an array of companies', async () => {
      jest
        .spyOn(companyService, 'getCompanies')
        .mockImplementation(() => companiesMock);

      jest
        .spyOn(travelService, 'getTravels')
        .mockImplementation(() => travelsMock);
      expect(companyService.findAll()).toEqual(resultExpect);
    });
  });

  afterAll((done) => {
    done();
  });
});
