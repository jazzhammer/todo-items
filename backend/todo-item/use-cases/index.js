import makeCreateTodoItem from "./createTodoItem.js";
import makeFindTodoItems from "./findTodoItems.js";
import makeRemoveTodoItem from "./removeTodoItem.js";

import todoItemsDb from '../data-access/index.js';
const createTodoItem = makeCreateTodoItem(todoItemsDb);
const findTodoItems = makeFindTodoItems(todoItemsDb);
const removeTodoItem = makeRemoveTodoItem(todoItemsDb);

const todoItemService = Object.freeze({
    createTodoItem,
    findTodoItems,
    removeTodoItem
});

export default todoItemService;
export {
    createTodoItem,
    findTodoItems,
    removeTodoItem
}
