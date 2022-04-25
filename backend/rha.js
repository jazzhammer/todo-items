import express from 'express';
import mongodb from "mongodb";
import bodyParser from 'body-parser';

const MongoClient = mongodb.MongoClient;
const dbName = 'todo';
const dbUri = `mongodb://127.0.0.1/${dbName}?retryWrites=true&w=majority`;
const apiRoot = '/api';
let client;


function main() {
    connectDb().then(connected => {
        if (!connected) {
            console.log(`failed to connect to database '${dbName}'.`);
            console.log(`is mongodb running ?`);
        }
    });
}

async function connectDb() {
    client = new MongoClient(dbUri);
    try {
        console.log(`connecting db(${dbName})...`);
        await client.connect();
        console.log('success');
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

main();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 3001;


// splash, check backend is running
// todo: consider providing api documentation here.
app.get('/', (req, res) => {
    res.send('TODO service 0.0.1');
}); 

// return all saved items
app.get(`${apiRoot}`, (req, res) => {
    res.send('get all');
});

app.post(`${apiRoot}`, (req, res) => {
    const creation = createTodoItem(req);
    if (creation) {
        creation.then( id =>
            res.send(id)
        );
    } else {
        res.status(error.status || 500).send({
            error: {
                status: error.status || 500,
                message: error.message || "Internal Server Error",
            },
        });
    }
});

async function createTodoItem(req) {
    try {
        const todoItems = client.db(dbName).collection('todoItems');
        const inserted = await todoItems.insertOne(req.body);
        return inserted.insertedId;
    } catch(e) {
        // todo: log somewhere useful.
        console.log(e);
        return null;
    }
}

// update an existing item
app.put(`${apiRoot}/:id`, (req, res) => {
    res.send('update');
});

// remove an existing item
app.delete(`${apiRoot}/:id`, (req, res) => {
    res.send('delete');
});

app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: 'Not found'
    });
})

app.listen(port, () => {});
