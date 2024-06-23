import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getRandomFact(): Promise<string> {
    const response: AxiosResponse<any> = await firstValueFrom(
      this.httpService.get('https://api.chucknorris.io/jokes/random'),
    );
    return response.data.value;
  }
}