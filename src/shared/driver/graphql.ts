import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLError } from 'graphql';

export const driver = {
  GraphQLModule: GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
    definitions: { path: join(process.cwd(), 'src/graphql.ts') },
    includeStacktraceInErrorResponses: false,
    formatError: (error: GraphQLError) => {
      let message = error.message;
      if (error?.extensions?.originalError) {
        message = (error?.extensions?.originalError as Error).message;
      }
      const newError = {
        message,
        code: error.extensions.code,
      };
      return newError;
    },
  }),
};
