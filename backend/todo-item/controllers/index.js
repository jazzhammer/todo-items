import {
    createTodoItem,
    findTodoItems,
    removeTodoItem,
    updateTodoItem
} from "../use-cases/index.js";
import makePostTodoItem from "./postTodoItem.js";
import makeGetTodoItems from "./getTodoItems.js";
import makeDeleteTodoItem from "./deleteTodoItem.js";
import makePutTodoItem from "./putTodoItem.js";

const postTodoItem = makePostTodoItem(createTodoItem);
const getTodoItems = makeGetTodoItems(findTodoItems);
const deleteTodoItem = makeDeleteTodoItem(removeTodoItem);
const putTodoItem = makePutTodoItem(updateTodoItem);

const todoController = Object.freeze(
    {
        postTodoItem,
        getTodoItems,
        deleteTodoItem,
        putTodoItem
    }
);

export default todoController;
export {
    postTodoItem,
    getTodoItems,
    deleteTodoItem,
    putTodoItem
};
