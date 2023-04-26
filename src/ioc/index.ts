import IoCContainer from 'ioc-lite';
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';

type IoCResources = {
  users: typeof Users;
  logger: typeof Logger;
  http: typeof HTTP;
  apiConfig: any;
}

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCResources>();

  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);

  return ioc;
};
