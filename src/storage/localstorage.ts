import { Note } from '@/core/models/Note';

export function createVar(key: string) {
    const isExists = localStorage.getItem(key);
    if (!isExists) {
        localStorage.setItem(key, "[]");
    }
}

export function addItem(key: string, value: string) {
    if ((key === null || key === '') || (value === null || value === '')) {
        return "Key or Value Invalid"
    }
    return localStorage.setItem(key, value);
}

export function getItem(key: string): Note[] {
    return JSON.parse(localStorage.getItem(key) as any);
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