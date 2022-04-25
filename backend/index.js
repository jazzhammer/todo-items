import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import sanitize from 'sanitize';
import {
    postTodoItem,
    getTodoItems,
    deleteTodoItem,
    putTodoItem
} from './todo-item/controllers/index.js';
import makeCallback from './todo-item/express-callback/index.js';

const apiRoot = process.env.API_ROOT;
const apiPort = process.env.API_PORT;
const app = express();
app.use(bodyParser.json());
app.use(sanitize.middleware);
// REST for todoItems
app.get(`${apiRoot}`, makeCallback(getTodoItems));
app.post(`${apiRoot}`, makeCallback(postTodoItem));
app.delete(`${apiRoot}/:id`, makeCallback(deleteTodoItem));
app.put(`${apiRoot}/:id`, makeCallback(putTodoItem));

// REST for all other todoWhatevers
//app.post(`${apiRoot}/whatever`, makeCallback(postTodoWhatever()));


// if no handlers for requested route
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: 'Not found'
    });
})

app.listen(apiPort, () => {});
