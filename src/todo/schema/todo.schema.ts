import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field()
  task: string;
  @Field()
  userId: string;
}
