import makeTodoItem from "../index.js";
export default function makeCreateTodoItem(todoItemsDb) {
    return async function createTodoItem(todoItemSource) {
        const todoItem = makeTodoItem(todoItemSource);
        const founds = await todoItemsDb.findById(todoItem.getId());
        if (founds && founds.length > 0) {
            return founds[0];
        }
        const inserted = await todoItemsDb.insert({
            id: todoItem.getId(),
            name: todoItem.getName()
        });
        return inserted;
    }
}
