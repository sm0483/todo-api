import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppResolver } from './app.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomHttpExceptionFilterProvider } from './shared/error/index';
import { driver } from './shared/driver/graphql';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    driver.GraphQLModule,
    AuthModule,
  ],
  controllers: [],
  providers: [CustomHttpExceptionFilterProvider, AppResolver],
})
export class AppModule {}
