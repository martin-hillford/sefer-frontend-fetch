import { ReactNode, useEffect, useState } from "react";
import { useFetchConfig } from "../hooks/useFetchConfig";
import { FetchContextProvider } from "./FetchContextProvider";
import { FetchContext } from "../types/FetchContext";

interface User {
    token: string | undefined
    deviceId?: string | undefined
}

export const PluginFetchProvider = (props : { user: User, configUrl: string, children: ReactNode}) => {
    const { user, configUrl, children } = props;
    const [ context, setContext ] = useState<FetchContext | undefined>()
    const config = useFetchConfig(configUrl);

    useEffect(() => {
        if(!config) return;
        setContext({ user, config });
    }, [config])


    if(!config || !context) return null;
    return (
        <FetchContextProvider context={context}>
            {children}
        </FetchContextProvider>
    )

}
