export interface IUser {
  id: number;
  name: string;
}

export interface IApiConfig {
  path: string;
  resources: { [key: string]: string };
}

export interface ILogger {
  info(message: string): void;
  error(message: string): void;
}

export interface IHTTP {
  get(url: string): any;
}
