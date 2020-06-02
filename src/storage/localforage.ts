import * as localForage from "localforage";

localForage.setDriver(localForage.INDEXEDDB);

export function createStore(key: string) {
    const isExists = localForage.getItem(key);
    if (!isExists) {
        localForage.setItem(key, []);
    }
}

export function addItem(key: string, value: any) {
    return localForage.setItem(key, value);
}

export function getItem(key: string): any {
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