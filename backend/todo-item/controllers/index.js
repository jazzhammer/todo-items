import {
    createTodoItem,
    findTodoItems,
    removeTodoItem
} from "../use-cases/index.js";
import makePostTodoItem from "./postTodoItem.js";
import makeGetTodoItems from "./getTodoItems.js";
import makeDeleteTodoItem from "./deleteTodoItem.js";

const postTodoItem = makePostTodoItem(createTodoItem);
const getTodoItems = makeGetTodoItems(findTodoItems);
const deleteTodoItem = makeDeleteTodoItem(removeTodoItem);

const todoController = Object.freeze(
    {
        postTodoItem,
        getTodoItems,
        deleteTodoItem
    }
);

export default todoController;
export {
    postTodoItem,
    getTodoItems,
    deleteTodoItem
};
