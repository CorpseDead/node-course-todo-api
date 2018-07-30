const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {
    if(error) {
        return console.log("Unable to connect to MongoDB server");
    }  
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection('Todos').find({completed: false}).toArray()
    // .then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection('Todos').find({
        _id: ObjectID('5b5eefc8f56e55089f37136d')
    }).toArray()
    .then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos", err);
    });

    // client.close();
});