import { Injectable } from '@nestjs/common';
import { Travel } from 'src/travels/models/travel.model';

@Injectable()
export class TravelsService {
  travels: Travel[];

  getTravels(): Travel[] {
    return this.travels;
  }

  constructor() {
    this.fetchTravels().then((travels) => {
      this.travels = travels;
    });
  }
  async fetchTravels(): Promise<Travel[]> {
    const response = await fetch(
      'https://5f27781bf5d27e001612e057.mockapi.io/webprovise/travels',
    );
    let data: Travel[] = await response.json();
    data = data.map((travel: Travel) => {
      travel.createdAt = new Date(travel.createdAt);
      travel.price = Number(travel.price);
      return travel;
    });

    return data;
  }
}
