import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'felipe guimaraes e feiosoa aaaaaaa';
  }

  getTeste(): string {
    return 'teste';
  }
}
