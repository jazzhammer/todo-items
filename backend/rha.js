const express = require('express');
const app = express();
const port = 3001;

// splash, check backend is running
// todo: maybe provide api documentation here.
app.get('/', (req, res) => {
    res.send('TODO service 0.0.1');
});// (GET)

// return all saved items
app.get('/api', (req, res) => {
    res.send('get all');
});// (GET)

// create an item
app.get('/api', (req, res) => {
    res.send('create');
});// (POST)

// update an existing item
app.get('/api/:id', (req, res) => {
    res.send('update');
});// (PUT)

// remove an existing item
app.get('/api/:id', (req, res) => {
    res.send('delete');
}); // (DELETE)

app.listen(port, () => {});
