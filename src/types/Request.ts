export type Request = {
    method : 'post' | 'put' | 'get' | 'head' | 'delete',
    action: string,
    type?: string
    responseType?: 'json' | 'blob' | 'text'
    body?: unknown
    allowExternal?: boolean
}
