const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const todoId = "5b604e0ed7ee6909fb107a10",
    userId = "5b6010c864a47a02c27ee42e";
if((!ObjectID.isValid(todoId)) || (!ObjectID.isValid(userId))){
    console.log("Id not found");
}

// Todo.find({
//     _id: id
// }).then(todos => {
//     if(!todos){
//         return console.log("Id not found");
//     }
//     console.log("Todos ", todos);
// });

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     if(!todo){
//         return console.log("Id not found");
//     }
//     console.log("Todo ", todo);
// });

Todo.findById(todoId).then(todo => {
    // if(!todo){
    //     return console.log("Id not found");
    // }
    console.log("Todo by id ", todo);
}).catch(e => console.log(e));

User.findById(userId).then(user => {
    // if(!todo){
    //     return console.log("Id not found");
    // }
    console.log("User by id ", user);
}).catch(e => console.log(e));