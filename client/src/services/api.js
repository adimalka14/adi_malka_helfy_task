const BASE_URL = 'http://localhost:4000/api';

async function http(method, path, body) {
    const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: body ? {'Content-Type': 'application/json'} : undefined,
        body: body ? JSON.stringify(body) : undefined,
    });

    let data = null;
    const text = await res.text();
    if (text) {
        try {
            data = JSON.parse(text);
        } catch {
            data = text;
        }
    }

    if (!res.ok) {
        const message = (data && data.message) || `HTTP ${res.status}`;
        const err = new Error(message);
        err.status = res.status;
        err.details = data?.errors ?? null;
        throw err;
    }

    return data;
}

export function getTasks() {
    return http('GET', '/tasks');
}

export function createTask({title, description = '', priority}) {
    return http('POST', '/tasks', {title, description, priority});
}

export function updateTask(id, patch) {
    return http('PUT', `/tasks/${id}`, patch);
}

export function toggleTask(id) {
    return http('PATCH', `/tasks/${id}/toggle`);
}

export function deleteTask(id) {
    return http('DELETE', `/tasks/${id}`);
}
