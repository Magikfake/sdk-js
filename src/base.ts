import fetch from 'cross-fetch';
import { InvalidAuthorization, BadRequestError, TooManyRequestsError } from './errors';

type Config = {
  apiKey: string;
};

interface Response<T> {
  body: {
    message: string,
    data : T
    count?: number
  };
  headers: Headers
}

export abstract class Base {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.baseUrl = 'https://api.magikfake.com/api';
  }

  protected async request<T>(endpoint: string, options?: RequestInit): Promise<Response<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'X-API-KEY': this.apiKey,
    };
    const config = {
      ...options,
      headers,
    };

    let response = await fetch(url, config)
    const body = await response.json();
    if (response.status >= 400) {
      switch (response.status) {
        case 401: 
          throw new InvalidAuthorization('Invalid api key');
        case 429: 
          throw new TooManyRequestsError(body.message);
        default:
          throw new BadRequestError('Invalid request check error messages', body.message);
      }
    }
    return {body, headers: response.headers};
  }
}