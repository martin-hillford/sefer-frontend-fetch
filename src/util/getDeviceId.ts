import { uuid } from './uuid';

/**
 * get a unique identifier for this browser and device
 * This identifier is stored in the localstorage. Will be removed if the user clears it's history
 */
export const getDeviceId = () => {
  const id = localStorage.getItem('id');
  if (id !== null) return id;
  localStorage.setItem('id', uuid());
  return localStorage.getItem('id') as string;
};
