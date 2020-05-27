import { nSQL } from "@nano-sql/core";

export function createDB() {
    nSQL().createDatabase({
        id: "storage_db",
        mode: "PERM",
        tables: [
            {
                name: "todos",
                model: {
                    "id:uuid": { pk: true, ai: true, },
                    "name:string": {},
                    "status:string": {}
                }
            }
        ],
        version: 1,
        onVersionUpdate: (prevVersion: any) => { // migrate versions
            return new Promise((res, rej) => {
                switch (prevVersion) {
                    case 1:
                        // migrate v1 to v2
                        res(2);
                        break;
                    case 2:
                        // migrate v2 to v3
                        res(3);
                        break;
                }

            });

        }
    }).then(() => {
        nSQL().useDatabase("storage_db");
        console.log("DB is ready!!!")
    }).catch((err: any) => {
        console.log(err);
    });
}

export const nanoSQL = {
    useTable() {
        nSQL("todos");
    },
    addItem(item: object) {
        this.useTable();
        return nSQL().query("upsert", item)
            .exec();
    },
    getAll() {
        this.useTable();
        return nSQL().query("select").exec();
    },
    updateItem(id: any, val: any) {
        this.useTable();
        return nSQL().query("upsert", val).where(["id", "=", id]).exec();
    },
    clearItem(id: string) {
        this.useTable();
        return nSQL().query("delete").where(["id", "=", id]).exec();
    }
}