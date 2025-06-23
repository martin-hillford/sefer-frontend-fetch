import { useEffect, useState } from "react";

export const useFetchConfig = (configUrl: string) => {
    const [ config, setConfig ] = useState<{ api: string }>();
    useEffect(() => {
        fetch(configUrl).then(response => {
            if(!response.ok) throw Error("Could not fetch config");
            else response.json().then(setConfig);
        });
    }, [ configUrl]);
    return config;
}
