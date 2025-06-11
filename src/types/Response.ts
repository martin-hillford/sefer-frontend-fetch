export type Response<T> = {
    code: number,
    body: T | undefined
    ok: boolean
}
