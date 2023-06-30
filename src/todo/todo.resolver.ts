import { Args, Mutation, Resolver, Int, Query, Context } from '@nestjs/graphql';
import { Todo } from './schema/todo.schema';
import { UseGuards } from '@nestjs/common';
import { JwtAccessTokenGuard } from '../guards/access.token.guard';
import { AddTodo } from '../todo/args/todo.args';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}
  @UseGuards(JwtAccessTokenGuard)
  @Mutation(() => String, { name: 'createTodo' })
  createTodo(@Args('createTodo') createTodo: AddTodo, @Context('user') user) {
    return this.todoService.createTodo(createTodo, user.sub);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Query(() => [Todo], { name: 'todos' })
  getTodos(@Context('user') user) {
    return this.todoService.getTodos(user.sub);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Query(() => Todo, { name: 'todo' })
  getTodo(@Args({ name: 'todoId' }) id: string) {
    return this.todoService.getTodo(id);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Mutation(() => String, { name: 'deleteTodo' })
  deleteTodo(@Args({ name: 'todoId' }) id: string) {
    return this.todoService.deleteTodo(id);
  }

  @UseGuards(JwtAccessTokenGuard)
  @Mutation(() => String, { name: 'updateTodo' })
  updateTodo(
    @Args({ name: 'todoId' }) id: string,
    @Args('todo') todo: AddTodo
  ) {
    return this.todoService.updateTodo(id, todo);
  }
}
