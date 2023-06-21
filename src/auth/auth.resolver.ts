import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { User } from './schema/auth.schema';
import { AuthService } from './auth.service';
import { AddUserArgs } from './args/add.user.args';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String, { name: 'register' })
  register(@Args('addUserArgs') addUserArgs: AddUserArgs) {
    return this.authService.createUser(addUserArgs);
  }

  @Query(() => User, { name: 'users', nullable: true })
  getUser(@Args({ name: 'userId', type: () => Int }) id: number) {
    return this.authService.getUser(id);
  }

  @Mutation(() => String, { name: 'updateUser' })
  updateUser(
    @Args({ name: 'userId', type: () => Int }) id: number,
    @Args('addUserArgs') addUserArgs: AddUserArgs
  ) {
    return this.authService.updateUser(id, addUserArgs);
  }

  @Mutation(() => String, { name: 'deleteUser' })
  deleteUser(@Args({ name: 'userId', type: () => Int }) id: number) {
    return this.authService.deleteUser(id);
  }
}
