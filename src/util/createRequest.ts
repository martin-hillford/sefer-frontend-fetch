import HttpContext from 'types/HttpContext';
import Response from 'types/Response';
import { getBody } from './getBody';
import { getContentType } from './getContentType';
import { getHeaders } from './getHeaders';

export function createRequest<TResponse>(request: HttpContext) {
  const { allowExternal, action, body, type = 'json', responseType = 'json', method, config, user, client } = request;
  const headers = getHeaders(user.deviceId, user.token);
  const options = { method, headers, mode: 'cors', redirect: 'follow', body: null as unknown };

  if (body && method !== 'get' && method !== 'head') {
    options.body = getBody(body, type);
    options.headers['Content-Type'] = getContentType(type);
  }

  const error = { code: 418, body: undefined, ok: false };

  return async () => {
    const uri = getResourceUri(allowExternal, action, config);

    try {
      return await client[responseType]<TResponse>(uri, options) as Response<TResponse>;
    } catch { return error; }
  };
}

const getResourceUri = (allowExternal: boolean | undefined, action: string, config: { api: string }) => {
  if (allowExternal === true && action.startsWith('https://')) return action;
  return action.startsWith('/') ? `${config.api}${action}` : `${config.api}/${action}`;
};
