import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './schema/user.schema';
import { AuthService } from './auth.service';
import { UserArgs } from './args/add.user.args';
import { Auth } from './schema/auth.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAccessTokenGuard } from '../guards/access.token.guard';
import { Context } from '@nestjs/graphql';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String, { name: 'register' })
  register(@Args('addUserArgs') addUserArgs: UserArgs) {
    return this.authService.createUser(addUserArgs);
  }

  @Mutation(() => Auth, { name: 'login' })
  login(@Args('loginUser') loginUser: UserArgs) {
    return this.authService.login(loginUser);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Query(() => String, { name: 'users', nullable: true })
  getUser(@Context('user') user) {
    const id = user.sub;
    return this.authService.getUser(id);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Mutation(() => String, { name: 'deleteUser' })
  deleteUser(@Context('user') user) {
    return this.authService.deleteUser(user.sub);
  }
}
