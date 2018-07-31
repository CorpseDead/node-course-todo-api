const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb')
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save().then(doc => {
        res.status(200).send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then(todos => {
        res.status(200).send({todos});
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {    
    const id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send("Invalid id! You must have missed a character!");
    }else{
        Todo.findById(id).then(todo => {
            if(!todo){
                res.status(404).send("We're sorry, but there is no item with this id. :(");
            }else{
                res.status(200).send({todo});
            }
        }, e=> res.status(400).send(e));
    }
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {
    app
}