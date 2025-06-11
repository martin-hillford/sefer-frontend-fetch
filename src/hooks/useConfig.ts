import { useFetchContext } from './useFetchContext';

export const useConfig = () => {
  const fetchContext = useFetchContext();
  return fetchContext.config;
};
