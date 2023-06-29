import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export interface UserDocument extends HydratedDocument<User> {
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

@Schema()
export class User {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

const userSchema = SchemaFactory.createForClass(User);

userSchema.pre('save', async function (): Promise<void> {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export const UserSchema = userSchema;
