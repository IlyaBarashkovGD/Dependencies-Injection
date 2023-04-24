import type { IApiConfig, IUser, IHTTP } from '../types';

export class Users {
  http: IHTTP;
  apiConfig: IApiConfig;

  static $inject = ['http', 'apiConfig'];

  constructor(http: IHTTP, apiConfig: IApiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  getUsers() {
    return this.http.get(this.apiConfig.resources.users) as unknown as IUser[];
  }
}
