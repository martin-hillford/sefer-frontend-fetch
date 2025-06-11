import { useLayoutEffect, useRef, useState } from 'react';
import { Response } from 'types/Response';
import { usePost } from './usePost';

/** This hook make a post request and returns the response  */
export function usePostSync<TResponse>(action : string, data: object) {
  const [response, setResponse] = useState<Response<TResponse>>();
  const [posting, setPosting] = useState(false);
  const isAPICalledRef = useRef(false);
  const post = usePost<TResponse>();

  useLayoutEffect(() => {
    if (posting || response || isAPICalledRef.current) return;
    setPosting(true);
    isAPICalledRef.current = true;
    const register = async () => {
      const body = await post(action, data);
      setResponse(body);
    };
    register().then();
  }, []);

  return response;
}

export default usePostSync;
