import makeTodoItemsDb from "./todoItemsDb.js";
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const host = '127.0.0.1';
const dbName = 'todo';
const collectionName = 'todoItems';
const dbUri = `mongodb://${host}/${dbName}?retryWrites=true&w=majority`;

async function makeDb() {
    const client = new MongoClient(dbUri);
    try {
        await client.connect();
        const todoItemsDb = client.db(dbName).collection(collectionName);
        return todoItemsDb;
    } catch (e) {
        // todo: log somewhere useful
        console.error(e);
        return null;
    }
}

const todoItemsDb = makeTodoItemsDb(makeDb);
export default todoItemsDb;
