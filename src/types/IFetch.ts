interface FetchResponse<T> {
    code: number,
    ok: boolean,
    body: T | undefined
}

export interface IFetch {
    json<T>(uri: string, options: unknown) : Promise<FetchResponse<T>>
    text(uri: string, options: unknown) : Promise<FetchResponse<string>>
    blob(uri: string, options: unknown) : Promise<FetchResponse<Blob>>
}
