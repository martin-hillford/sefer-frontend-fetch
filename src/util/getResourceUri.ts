export const getResourceUri = (allowExternal: boolean | undefined, action: string, config: { api: string }) => {
    if (allowExternal === true && action.startsWith('https://')) return action;
    return action.startsWith('/') ? `${config.api}${action}` : `${config.api}/${action}`;
};
