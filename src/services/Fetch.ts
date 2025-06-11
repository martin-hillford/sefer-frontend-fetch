import { IFetch } from 'types/IFetch';

async function get<T>(method: 'json' | 'blob' | 'text', uri: string, options: unknown) {
  const response = await fetch(uri, options as RequestInit);
  const result = { code: response.status, ok: response.ok };
  try {
    const body = await response[method]();
    return { ...result, body: body as T };
  } catch { /* empty */ }
  return { ...result, body: undefined };
}

async function json<T>(uri: string, options: unknown) {
  return get<T>('json', uri, options);
}

async function text(uri: string, options: unknown) {
  return get<string>('text', uri, options);
}

async function blob(uri: string, options: unknown) {
  return get<Blob>('blob', uri, options);
}

export const Fetch = { json, text, blob } as IFetch;
