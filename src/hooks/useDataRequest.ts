import { Request } from 'types/Request';
import { createRequest } from 'util/createRequest';
import { useConfig } from './useConfig';
import { useFetch } from './useFetch';
import { useUser } from './useUser';

/** This hook returns a post method that can be used to make a post request. */
export function useDataRequest<TResponse>(method : 'post' | 'put' | 'get' | 'delete') {
  const config = useConfig();
  const user = useUser();
  const client = useFetch();

  return async (action: string, data: unknown) => {
    const request = getRequest(action, data, method);
    const execute = createRequest<TResponse>({ ...request, config, user, client });
    return execute();
  };
}

const getRequest = (action: string, data: unknown, method : 'post' | 'put' | 'get' | 'delete') => ({
  method,
  body: data,
  action
} as Request);
