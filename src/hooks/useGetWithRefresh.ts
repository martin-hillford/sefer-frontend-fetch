import { useEffect, useReducer, useState } from 'react';
import { useGetAsync } from './useGetAsync';

export function useGetWithRefresh<T>(url: string): [T | undefined | null, () => void, (value: T) => void] {
  const state = useState<T | null | undefined>();
  const [value, refresh] = useReducer(x => x + 1, 0);
  const get = useGetAsync<T>();

  useEffect(() => {
    get(url).then(response => {
      if(!response.ok) state[1](null);
      else state[1](response.body);
    })
  }, [ url, value ]);

  return [ state[0], refresh, state[1] ];
}
