// import { Args, Query, Resolver } from '@nestjs/graphql';
// import { TravelsArgs } from './dto/travels.args';
// import { Travel } from './models/travel.model';
// import { TravelsService } from './travels.service';

// @Resolver((of) => Travel)
// export class TravelsResolver {
//   constructor(private readonly travelsService: TravelsService) {}

//   @Query(() => [Travel])
//   travels(@Args() travelsArgs: TravelsArgs): Promise<Travel[]> {
//     return this.travelsService.findAll(travelsArgs);
//   }
// }
