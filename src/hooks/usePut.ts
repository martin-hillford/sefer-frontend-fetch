import { useDataRequest } from './useDataRequest';

/** This hook returns a post method that can be used to make a post request. */
export function usePut<TResponse>() {
  return useDataRequest<TResponse>('put');
}
