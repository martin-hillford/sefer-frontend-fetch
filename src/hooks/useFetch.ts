import { Fetch } from 'services/Fetch';
import { useFetchContext } from './useFetchContext';

export const useFetch = () => {
  const fetchContext = useFetchContext();
  return fetchContext.client ?? Fetch;
};
