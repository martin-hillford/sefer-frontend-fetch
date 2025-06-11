export const getBody = (body: unknown, type: string) => {
  switch (type) {
    case 'json': return JSON.stringify(body);
    default: return body;
  }
};
