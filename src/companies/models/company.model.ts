import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'company' })
export class Company {
  @Field({ nullable: false })
  id: string;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  parentId: string;

  @Field({ nullable: false })
  createdAt: Date;
}
