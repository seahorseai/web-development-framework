import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    try {
      const result = await this.appService.getHello();
      return result;
    } catch (error) {
      return error.message;
    }
  }
}