// var loki = require("lokijs/src/lokijs.js");


// @ts-ignore
var ia = new LokiIndexedAdapter("quickstarts");

// @ts-ignore
var db = new loki("quickstart.db", {
    adapter: ia,
    autoload: true,
    autoloadCallback: databaseInitialize,
    autosave: true,
    autosaveInterval: 100
});
var tasks: any;
export function databaseInitialize() {
    tasks = db.getCollection("tasks");
    if (tasks === null) {
        tasks = db.addCollection("tasks");
    }
    console.log(tasks);
}

export function addItem(doc: any) {
    return tasks.insert(doc);
}

export function getAll() {
    return tasks.chain().data();
}

export function updateItem(id: any, doc: any) {
    return tasks.chain().find({ $loki: id }).update((obj: any) => obj.name = doc);
}

export function clearItem(id: number) {
    return tasks.chain().find({ $loki: { $eq: id } }).remove();
}

