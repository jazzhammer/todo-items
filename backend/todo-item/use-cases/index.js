import makeCreateTodoItem from "./createTodoItem.js";
import makeFindTodoItems from "./findTodoItems.js";
import makeRemoveTodoItem from "./removeTodoItem.js";
import makeUpdateTodoItem from "./updateTodoItem.js";

import todoItemsDb from '../data-access/index.js';
const createTodoItem = makeCreateTodoItem(todoItemsDb);
const findTodoItems = makeFindTodoItems(todoItemsDb);
const removeTodoItem = makeRemoveTodoItem(todoItemsDb);
const updateTodoItem = makeUpdateTodoItem(todoItemsDb);

const todoItemService = Object.freeze({
    createTodoItem,
    findTodoItems,
    removeTodoItem,
    updateTodoItem
});

export default todoItemService;
export {
    createTodoItem,
    findTodoItems,
    removeTodoItem,
    updateTodoItem
}
