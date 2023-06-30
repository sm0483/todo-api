import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
@ArgsType()
export class AddTodo {
  @Field()
  @IsNotEmpty()
  task: string;
}
