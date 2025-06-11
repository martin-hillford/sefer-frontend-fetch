import { useEffect, useState } from 'react';
import { Request } from 'types/Request';
import { Response } from 'types/Response';
import { createRequest } from 'util/createRequest';
import { useConfig } from './useConfig';
import { useFetch } from './useFetch';
import { useUser } from './useUser';

export function useRequest<TResponse>(request: Request) {
  const config = useConfig();
  const user = useUser();

  const [fetching, setFetching] = useState(false);
  const [response, setResponse] = useState<Response<TResponse> | undefined>();
  const client = useFetch();

  useEffect(() => {
    if (fetching || !client) return;
    const fetch = async () => {
      setFetching(true);
      const execute = createRequest<TResponse>({ ...request, config, user, client });
      setResponse(await execute());
      setFetching(false);
    };
    fetch().then();
  }, [request.action, request.method]);

  return response;
}
