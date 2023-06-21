import { Injectable } from '@nestjs/common';
import { User } from './schema/auth.schema';

@Injectable()
export class AuthService {
  createUser(user: User) {
    return 'User created';
  }

  getUser(id: number) {
    console.log(id);
    return {
      name: 'cat fish',
      password: 'jack',
    };
  }

  updateUser(id: number, data: User) {
    return 'User updated..';
  }

  deleteUser(id: number) {
    return 'User deleted';
  }
}
