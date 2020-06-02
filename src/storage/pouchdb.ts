import PouchDB from 'pouchdb';

PouchDB.plugin(require('pouchdb-find'));

const db = new PouchDB('vuedb')
// const remotedb = new PouchDB('http://localhost:5984/vuedb')
const store: any = {}


store.getNotes = () => {
    return db.allDocs({ include_docs: true });
}

store.addNote = (data: any) => {
    return db.put(data);
}

store.updateNote = (data: any) => {
    return db.get(data._id).then(doc => {
        doc = { ...data };
        return db.put(doc);
    });
}

store.deleteNote = (data: any) => {
    return db.get(data._id).then(doc => {
        return db.remove(doc._id, doc._rev);
    });
}

export default store;