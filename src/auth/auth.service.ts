import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/user.schema';
import { Model } from 'mongoose';
import { UserArgs } from './args/add.user.args';
import { CustomError } from 'src/shared/error/index';
import { ErrorCode } from 'src/shared/error/index';
import { UserDocument } from '../schema/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async createUser(user: UserArgs) {
    const userExists = await this.userModel.findOne({ email: user.email });
    if (userExists) {
      throw new CustomError('User already present', ErrorCode.BAD_USER_INPUT);
    }
    const newUser = new this.userModel(user);
    await newUser.save();
    return 'User created..';
  }

  async login(loginUser: UserArgs) {
    const user = await this.userModel.findOne({ email: loginUser.email });
    if (!user) {
      throw new CustomError('User not found', ErrorCode.BAD_USER_INPUT);
    }
    const isMatch = await (user as UserDocument).comparePassword(
      loginUser.password
    );
    if (!isMatch) {
      throw new CustomError('Invalid password', ErrorCode.BAD_USER_INPUT);
    }
    const payload = {
      sub: user._id,
      name: user.email.substring(0, user.email.indexOf('@')),
    };

    const token = this.jwtService.sign(payload);
    return {
      token,
      userId: user._id,
    };
  }

  async getUser(id: string) {
    const user = await this.userModel.findById(id);
    return user.email;
  }

  async deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
