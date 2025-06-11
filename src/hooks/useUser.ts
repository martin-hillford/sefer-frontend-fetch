import { useAccessToken } from './useAccessToken';
import { useDeviceId } from './useDeviceId';

export const useUser = () => {
  const token = useAccessToken();
  const deviceId = useDeviceId();
  return { token, deviceId };
};
