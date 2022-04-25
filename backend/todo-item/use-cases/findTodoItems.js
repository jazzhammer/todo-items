export default function makeFindTodoItems(todoItemsDb) {
    return async function findTodoItems() {
        const founds = await todoItemsDb.findAll();
        return founds;
    }
}
