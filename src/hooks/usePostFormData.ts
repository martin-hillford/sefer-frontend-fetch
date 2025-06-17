import { getHeaders } from "../util/getHeaders";
import { getResourceUri } from "../util/getResourceUri";
import { useConfig } from "./useConfig";
import { useUser } from "./useUser";

export const usePostFormData = () => {
    const { deviceId, token} = useUser();
    const config = useConfig();

    return async (action: string, body: FormData, onProgress? : (percentage: number) => void, allowExternal? : boolean) => {
        const headers = getHeaders(deviceId, token);
        const url = getResourceUri(allowExternal, action, config)

        return new Promise((resolve, reject) => {
            const xhr = getXhr(url, headers,onProgress);

            // Add all the required header. This can only be once the request has an 'open state'.
            setHeaders(xhr, headers);

            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300)  resolve(true);
                else reject();
            };

            xhr.send(body);
        });
    }
};

const getXhr = (url : string,  headers: { [key: string]: string }, onProgress? : (percentage: number) => void) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true; // ensure when a server order to set cookies, to set them

    const onProgressHandler = (event : ProgressEvent<EventTarget>) => {
        if (onProgress && event.lengthComputable) {
            const completed = (event.loaded / event.total) * 100;
            onProgress(completed);
        }
    };

    const onTimeout = () => {
        throw new Error('Could not upload data: the server is not available.');
    };

    const onError = () => {
        throw new Error('Could not upload data: error occurred.');
    };

    // XHR for Chrome/Firefox/Opera/Safari.
    if ('withCredentials' in xhr) {
        xhr.open('post', url, true);
        xhr.upload.onprogress = onProgressHandler;
        xhr.ontimeout = onTimeout;
        xhr.onerror = onError;
        return xhr;
    }

    // Cors not supported
    throw new Error('Cross Domain ajax requests are not support by this browser, please use a more recent browser.');
};

const setHeaders = (xhr: XMLHttpRequest, headers: { [key: string]: string }) => {
    Object.keys(headers ).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
    });
}
