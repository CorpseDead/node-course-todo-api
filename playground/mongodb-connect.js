// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// //Object destructuring
// const user = {name: "Tom", age: 25};
// const {name, age} = user;

// const obj = new ObjectID();
// console.log(obj);

//Takes 2 arguments
//1. url
//2. callback
MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {
    if(error) {
        return console.log("Unable to connect to MongoDB server");
    }  
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection(`Todos`).insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log(`Unable to insert todo because of ${err}`);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users
    // db.collection("Users").insertOne({
    //     username: "Goat",
    //     password: "jkl123",
    //     validated: true,
    //     email: "jkl@gmail.com",
    //     subscribedToNovelId: {
    //         1: 114354,
    //         2: 543795,
    //         3: 1213,
    //         4: 1235,
    //         5: 23987
    //     },
    //     reviewedNovelId: {
    //         1: 1213,
    //         2: 23987,
    //         3: 9899
    //     },
    //     gender: "_male",
    //     age: "18",
    //     selfDesription: "Whatever you want to do, do it now!",
    //     title: "Darkness dwells in us",
    //     location: "In the darkest pit of my mind",
    //     avatarURL: "i.imgur.com/yx89cz9qwhdnq/"
    // }, (err, result) => {
    //     if(err){
    //         return console.log(`Unable to insert todo because of ${err}`);
    //     }
    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     // console.log(`Timestamp: ${result.ops[0]._id.getTimestamp()}`);
    //     // console.log(`ToString: ${result.ops[0]._id.toString()}`);
    //     // console.log(`ValueOf: ${result.ops[0]._id.valueOf()}`);
    // });

    client.close();
});