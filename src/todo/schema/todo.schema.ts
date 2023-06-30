import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field()
  _id: string;
  @Field()
  task: string;
  @Field()
  user: string;
}
