export const getHeaders = (deviceId: string, token: string | undefined) => {
  const headers = {} as { [key: string]: string };

  // Get information on the location of the user
  headers['X-RequestPath'] = window.location.href;

  // Add the user token to the header if the user is logged on
  if (token) headers['X-AccessToken'] = token;

  // A unique device identifier is included, for statistical and security purposes
  headers['X-BrowserToken'] = deviceId;
  return headers;
};
