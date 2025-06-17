import { useGetAsync } from './useGetAsync';
import { useEffect, useState } from 'react';

export function useGetWithState<T>(url: string) {
  const state = useState<T | null | undefined>();
  const get = useGetAsync<T>();

  useEffect(() => {
    get(url).then(response => {
      if(!response.ok) state[1](null);
      else state[1](response.body);
    })
  }, [ url ]);

  return state;
}
