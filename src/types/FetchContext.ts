import { IFetch } from './IFetch';

export interface FetchContext {
    config: { api: string }
    user?: {
        token: string | undefined
        deviceId?: string | undefined
    }
    client?: IFetch | undefined
}
