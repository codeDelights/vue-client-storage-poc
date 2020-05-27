import * as localForage from "localforage";

export function addItem (key: string, value: any) {
    if ((key === null || key === '') || (value === null || value === '')) {
        return Promise.reject("Key or Value Invalid");
    }
    return localForage.setItem(key, value);
}

export function getItem (key: string): any {
    if (key === null || key === '') {
        return "Invalid Key"
    }
    return localForage.getItem(key);
}

export function deleteItem(key: string) {
    if (key === null || key === '') {
        return "Invalid Key"
    }
    return localForage.removeItem(key);
}

export function deleteAll() {
    return localForage.clear();
}

export function getAllKeys() {
    return localForage.keys();
}

export function getAll(getall: any) {
    localForage.iterate(getall);
}