import {createTodoItem} from "../use-cases/index.js";
import makePostTodoItem from "./postTodoItem.js";

const postTodoItem = makePostTodoItem(createTodoItem);

const todoController = Object.freeze(
    {
        postTodoItem
    }
);

export default todoController;
export {
    postTodoItem
};
