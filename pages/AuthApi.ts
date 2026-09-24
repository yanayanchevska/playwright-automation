import { APIRequestContext } from '@playwright/test';

export class AuthApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async login(email: string, password: string) {
    const response = await this.request.post('https://api.practicesoftwaretesting.com/users/login', {
      data: { email, password },
    });
    const body = await response.json();
    return body.access_token;
  }
}