import { getEnv } from "utils/envUtils";

export default function apiCall(url, method = "GET", data) {
    const finalUrl = getEnv("API_URL") + url;
    const jwt = localStorage.getItem("SMARTECH_JWT");
    const headers = { Accept: "application/json", "Authorization": `Bearer ${jwt}` };
    if (method !== "GET" && data) {
        headers["Content-Type"] = "application/json";
    }
    const body = JSON.stringify(data);

    return fetch(finalUrl, {
        method,
        body,
        headers
    })
        .then(res => {
            if ([200, 201].includes(res.status)) {
                return res.json();
            } else {
                throw res;
            }
        })
        .catch(err => {
            throw err;
        });
}
