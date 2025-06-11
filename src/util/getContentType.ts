export const getContentType = (type: string) => {
  switch (type) {
    case 'json': return 'application/json';
    default: return 'text/plain;charset=UTF-8';
  }
};
