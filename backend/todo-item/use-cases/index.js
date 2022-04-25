import makeCreateTodoItem from "./createTodoItem.js";
import todoItemsDb from '../data-access/index.js';
const createTodoItem = makeCreateTodoItem(todoItemsDb);

const todoItemService = Object.freeze({
    createTodoItem
});

export default todoItemService;
export {
    createTodoItem
}
