import { Request } from 'types/Request';
import { useRequest } from './useRequest';

export function useGet<TResponse>(action: string) {
  const request = { method: 'get', action } as Request;
  const response = useRequest<TResponse>(request);
  if (!response) return undefined;
  if (response.code !== 200) return null;
  return response.body;
}
