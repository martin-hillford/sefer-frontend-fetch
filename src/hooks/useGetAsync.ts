import { useDataRequest } from './useDataRequest';

export function useGetAsync<TResponse>() {
  const method = useDataRequest<TResponse>('get');
  return async (action: string) => method(action, {});
}
