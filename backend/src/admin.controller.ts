import { Controller, Get } from '@nestjs/common';
import { Roles, Session } from '@thallesp/nestjs-better-auth';
import type { UserSession } from '@thallesp/nestjs-better-auth';

@Controller('admin')
@Roles(['ADMIN'])
export class AdminController {
  @Get('me')
  getAdminSession(@Session() session: UserSession) {
    return {
      user: session.user,
      session: session.session,
    };
  }
}
