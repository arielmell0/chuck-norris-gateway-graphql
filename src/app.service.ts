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

  async getCategories(): Promise<string[]> {
    const response: AxiosResponse<any> = await firstValueFrom(
      this.httpService.get('https://api.chucknorris.io/jokes/categories'),
    );
    return response.data;
  }

  async getRandomFactByCategory(category: string): Promise<string> {
    const response: AxiosResponse<any> = await firstValueFrom(
      this.httpService.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`,
      ),
    );
    return response.data.value;
  }

  async searchJokes(query: string): Promise<string[]> {
    const response: AxiosResponse<any> = await firstValueFrom(
      this.httpService.get(
        `https://api.chucknorris.io/jokes/search?query=${query}`,
      ),
    );
    return response.data.result.map((joke: any) => joke.value);
  }
}
