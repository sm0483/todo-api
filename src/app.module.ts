import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { AppResolver } from './app.resolver';
import { GraphQLError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: { path: join(process.cwd(), 'src/graphql.ts') },
      includeStacktraceInErrorResponses: false,
      formatError: (error: GraphQLError) => {
        const newError = {
          message: error.message,
          code: error.extensions.code,
        };
        return newError;
      },
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
