import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from '../schema/todo.schema';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
