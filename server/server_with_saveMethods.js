const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

// const newTodo = new Todo({
//     text: "Cook dinner"
// });

// const otherTodo = new Todo({
//     text: "  Try me bitch!  "
// });

// const newUser = new User({
//     username: "CorpseDead   ",
//     email: "corpse@gmail.com",
//     password: "  asd12345",
//     description: "Las bandidas potatos."
// });

// newTodo.save().then(doc => {
//     console.log('Saved todo ', doc);
// }, e => {
//     console.log("Unable to save todo ", e);
// });

// otherTodo.save().then(doc =>{
//     console.log('Saved todo ', JSON.stringify(doc, undefined, 2));
// }, e => {
//     console.log("Unable to save todo ", e);
// })

// newUser.save().then(doc =>{
//     console.log('Saved todo ', JSON.stringify(doc, undefined, 2));
// }, e => {
//     console.log("Unable to save todo ", e);
// })

app.listen(3000, () => {
    console.log('Started on port 3000');
});