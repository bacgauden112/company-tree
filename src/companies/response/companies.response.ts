import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'company response' })
export class CompaniesResponse {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  parentId: string;

  @Field({ nullable: false })
  createdAt: Date;

  @Field({ nullable: false })
  cost: number;

  @Field(() => [CompaniesResponse], { nullable: true })
  children: CompaniesResponse[];
}
