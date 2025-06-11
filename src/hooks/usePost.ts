import { useDataRequest } from './useDataRequest';

/** This hook returns a post method that can be used to make a post request. */
export function usePost<TResponse>() {
  return useDataRequest<TResponse>('post');
}
