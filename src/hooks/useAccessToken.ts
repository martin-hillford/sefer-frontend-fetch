import { useFetchContext } from './useFetchContext';

export const useAccessToken = () => {
  const fetchContext = useFetchContext();
  return fetchContext?.user?.token;
};
