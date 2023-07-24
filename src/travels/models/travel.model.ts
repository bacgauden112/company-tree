import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'company' })
export class Travel {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  employeeName: string;

  @Field({ nullable: false })
  departure: string;

  @Field({ nullable: false })
  destination: string;

  @Field({ nullable: false })
  price: number;

  @Field({ nullable: true })
  companyId: string;

  @Field({ nullable: false })
  createdAt: Date;
}
