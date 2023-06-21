import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class AddUserArgs {
  @Field()
  @Length(5)
  name: string;
  @Field()
  @Length(8)
  password: string;
}
