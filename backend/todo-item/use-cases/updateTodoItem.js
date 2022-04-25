import makeTodoItem from "../index.js";
export default function makeUpdateTodoItem(todoItemsDb) {
    return async function updateTodoItem(todoItemId, todoItemSource) {
        const todoItem = makeTodoItem(todoItemSource);
        const founds = await todoItemsDb.findById(todoItemId);
        if (founds && founds.length > 0) {
            const toUpdate = founds[0];
            const updated = await todoItemsDb.update({_id: toUpdate._id}, {
                $set: {
                    id: todoItem.getId(),
                    name: todoItem.getName(),
                    isComplete: todoItem.getIsComplete()
                }
            });
            const updatedFounds = await todoItemsDb.findById(todoItemId);
            if (updatedFounds && updatedFounds.length > 0) {
                const updatedFound = updatedFounds[0];
                delete updatedFound._id;
                return updatedFound;
            }
        }
        return null;
    }
}
