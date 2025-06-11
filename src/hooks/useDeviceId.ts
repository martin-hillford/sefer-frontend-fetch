import { getDeviceId } from 'util/getDeviceId';
import { useFetchContext } from './useFetchContext';

export const useDeviceId = () => {
  const fetchContext = useFetchContext();
  return fetchContext?.user?.deviceId ?? getDeviceId();
};
