import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAccessTokenGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context).getContext();
    try {
      const authorization = ctx.req.headers.authorization;
      const token = authorization.split(' ')[1];
      const data = this.jwtService.verify(token);
      ctx.user = data;
      return true;
    } catch (error) {
      return false;
    }
  }
}
