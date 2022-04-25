export default function makeRemoveTodoItem(todoItemsDb) {
    return async function removeTodoItem(todoItemId) {
        const founds = await todoItemsDb.findById(todoItemId);
        if (founds && founds.length > 0) {
            const removed = founds[0];
            delete removed._id;
            await todoItemsDb.remove(todoItemId);
            return removed;
        }
        return null;
    }
}
