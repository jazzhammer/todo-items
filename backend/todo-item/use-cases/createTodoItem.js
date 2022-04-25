import makeTodoItem from "../index.js";
export default function makeCreateTodoItem(todoItemsDb) {
    return async function createTodoItem(todoItemSource) {
        todoItemSource.isComplete = false;
        const todoItem = makeTodoItem(todoItemSource);
        const founds = await todoItemsDb.findById(todoItem.getId());
        if (founds && founds.length > 0) {
            return founds[0];
        }
        const inserted = await todoItemsDb.insert({
            id: todoItem.getId(),
            name: todoItem.getName(),
            isComplete: todoItem.getIsComplete()
        });
        return inserted;
    }
}
