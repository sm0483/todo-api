import { Injectable } from '@nestjs/common';
import { AddTodo } from './args/todo.args';
import { Todo } from 'src/schema/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomError, ErrorCode } from 'src/shared/error';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>
  ) {}
  async createTodo(todo: AddTodo, user: string) {
    const response = await this.todoModel.create({ ...todo, user });
    if (response) return 'Successfully created';
    throw new CustomError('Failed to create', ErrorCode.BAD_USER_INPUT);
  }
  async getTodos(id: string) {
    return this.todoModel.find({ user: id });
  }
  async getTodo(id: string) {
    return this.todoModel.findById(id);
  }
  async deleteTodo(id: string) {
    const response = await this.todoModel.findOneAndDelete({ _id: id });
    if (!response)
      throw new CustomError('Failed to delete', ErrorCode.BAD_USER_INPUT);
    return 'Successfully deleted';
  }
  async updateTodo(id: string, todo: AddTodo) {
    const response = await this.todoModel.findOneAndUpdate({ _id: id }, todo);
    if (!response)
      throw new CustomError('Failed to update', ErrorCode.BAD_USER_INPUT);
    return 'Successfully updated';
  }
}
