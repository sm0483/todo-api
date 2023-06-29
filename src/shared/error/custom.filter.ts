import { ExceptionFilter, Catch, Logger } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { APP_FILTER } from '@nestjs/core';

@Catch(GraphQLError)
export class CustomHttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GraphQLError.name);
  catch(err: GraphQLError) {
    if (!err.extensions.code || err.extensions.code === 'INTERNAL_SERVER_ERROR')
      this.logger.error({ err }, 'Graphql internal error');
    throw err;
  }
}

export const CustomHttpExceptionFilterProvider = {
  provide: APP_FILTER,
  useClass: CustomHttpExceptionFilter,
};
