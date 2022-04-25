export default function makeTodoItemsDb(makeDb) {

    return Object.freeze({
        findAll,
        findById,
        insert,
        remove,
        update
    });

    async function findAll() {
        const db = await makeDb();
        const query = {};
        const result = db.find(query);
        return result.toArray();
    }

    async function findById(sourceId) {
        const db = await makeDb();
        const founds = await db.find({id : sourceId});
        return founds.toArray();
    }

    async function insert(todoItem) {
        const db = await makeDb();
        const inserted = await db.insertOne(todoItem);
        const one = await db.findOne({_id: inserted.insertedId});
        delete one._id;
        return one;
    }

    async function remove() {

    }

    async function update() {

    }


}
