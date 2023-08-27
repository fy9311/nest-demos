import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  @Inject(AppService)
  private readonly appService: AppService;
  @Inject(UserService)
  private readonly userService: UserService;

  @Get()
  getHello(): string {
    console.log(this.userService.findAll());
    return this.appService.getHello();
  }
}
