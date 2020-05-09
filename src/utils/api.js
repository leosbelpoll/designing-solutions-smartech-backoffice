export default function apiCall(url, method = "GET", data) {
    return fetch(url, {
        method,
        body: data ? JSON.stringify(data) : undefined,
        headers: data ? { Accept: "*", "Content-Type": "application/json" } : undefined
    }).then(res => res.json());
}
