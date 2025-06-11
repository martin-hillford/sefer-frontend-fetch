import { IFetch } from 'types/IFetch';
import { Request } from './Request';

export type HttpContext = Request & {
    config: { api: string }
    user: {
        token: string | undefined
        deviceId: string
    }
    client: IFetch
};
