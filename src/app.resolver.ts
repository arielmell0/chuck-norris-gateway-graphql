import { Resolver, Query, Args } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) { }

  @Query(() => String)
  async getRandomFact() {
    return this.appService.getRandomFact();
  }

  @Query(() => [String])
  async getCategories() {
    return this.appService.getCategories();
  }

  @Query(() => String)
  async getRandomFactByCategory(@Args('category') category: string) {
    return this.appService.getRandomFactByCategory(category);
  }

  @Query(() => [String])
  async searchJokes(@Args('query') query: string) {
    return this.appService.searchJokes(query);
  }
}