import { Mutation, Resolver } from '@nestjs/graphql';
import { Todo } from './schema/todo.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAccessTokenGuard } from '../guards/access.token.guard';

// // mutation create todo
// // query get todo
// // mutation update todo
// // mutation delete todo

@Resolver(() => Todo)
export class TodoResolver {
  //   @UseGuards(JwtAccessTokenGuard)
  //   @Mutation(() => String, { name: 'createTodo' })
  //   createTodo() {}
}
