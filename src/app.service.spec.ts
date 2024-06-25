import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';

describe('AppService', () => {
  let service: AppService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AppService>(AppService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRandomFact', () => {
    it('should return a random fact', async () => {
      const mockResponse: AxiosResponse<any> = {
        data: { value: 'Chuck Norris fact' },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: { headers: null },
      };

      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(mockResponse));

      const result = await service.getRandomFact();
      expect(result).toBe('Chuck Norris fact');
    });
  });

  describe('getCategories', () => {
    it('should return an array of categories', async () => {
      const mockResponse: AxiosResponse<any> = {
        data: ['category1', 'category2'],
        status: 200,
        statusText: 'OK',
        headers: {},
        config: { headers: null },
      };

      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(mockResponse));

      const result = await service.getCategories();
      expect(result).toEqual(['category1', 'category2']);
    });
  });

  describe('getRandomFactByCategory', () => {
    it('should return a random fact by category', async () => {
      const mockResponse: AxiosResponse<any> = {
        data: { value: 'Chuck Norris fact in category' },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: { headers: null },
      };

      const category = 'category1';
      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(mockResponse));

      const result = await service.getRandomFactByCategory(category);
      expect(result).toBe('Chuck Norris fact in category');
    });
  });

  describe('searchJokes', () => {
    it('should return an array of jokes', async () => {
      const mockResponse: AxiosResponse<any> = {
        data: {
          result: [{ value: 'joke1' }, { value: 'joke2' }],
        },
        status: 200,
        statusText: 'OK',
        headers: {},
        config: { headers: null },
      };

      const query = 'searchTerm';
      jest
        .spyOn(httpService, 'get')
        .mockImplementationOnce(() => of(mockResponse));

      const result = await service.searchJokes(query);
      expect(result).toEqual(['joke1', 'joke2']);
    });
  });
});
