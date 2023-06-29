import { GraphQLError } from 'graphql';

export class CustomError extends GraphQLError {
  constructor(message: string, code: string) {
    super(message);
    Object.defineProperty(this, 'extensions', {
      value: { code },
      enumerable: true,
    });
  }
}
