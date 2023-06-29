import { InputType, Field, ArgsType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword, IsNotEmpty } from 'class-validator';

@InputType()
@ArgsType()
export class UserArgs {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
