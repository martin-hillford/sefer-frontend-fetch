import { useDataRequest } from './useDataRequest';

/** This hook returns a delete method that can be used to make a post request. */
export function useDelete<TResponse>() {
  return useDataRequest<TResponse>('delete');
}
