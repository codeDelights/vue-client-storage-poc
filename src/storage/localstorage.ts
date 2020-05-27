export function addItem (key: string, value: string) {
    if ((key === null || key === '') || (value === null || value === '')) {
        return "Key or Value Invalid"
    }
    return localStorage.setItem(key, value);
}

export function getItem (key: string): any {
    if (key === null || key === '') {
        return "Invalid Key"
    }
    return localStorage.getItem(key);
}

export function deleteItem(key: string) {
    if (key === null || key === '') {
        return "Invalid Key"
    }
    return localStorage.removeItem(key);
}

export function deleteAll() {
    return localStorage.clear();
}