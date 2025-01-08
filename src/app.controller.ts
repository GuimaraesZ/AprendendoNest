import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  

  @Get('/teste')
  getTeste(): any {

    const user = {
      nome: 'Felipe',
      idade: 25,
      email: 'felipe@gmail.com'
    }

    return user;

    //return this.appService.getTeste();
  }
}
