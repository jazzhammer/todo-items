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
        const founds = await db.find(query).toArray();
        founds.forEach((item) => {
            delete item._id;
        });
        return founds;
    }

    async function findById(sourceId) {
        const db = await makeDb();
        const founds = await db.find({id : sourceId});
        return founds.toArray();
    }

    async function insert(todoItem) {
        todoItem.isComplete = false;
        const db = await makeDb();
        const inserted = await db.insertOne(todoItem);
        const one = await db.findOne({_id: inserted.insertedId});
        delete one._id;
        return one;
    }

    async function remove(todoItemId) {
        const db = await makeDb();
        await db.deleteOne({id: todoItemId});

    }

    async function update(filter, todoItemSet) {
        const db = await makeDb();
        const updated = await db.updateOne(filter, todoItemSet);
        return updated;
    }


}
