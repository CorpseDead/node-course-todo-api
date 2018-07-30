const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {
    if(error) {
        return console.log("Unable to connect to MongoDB server");
    }  
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5b5f067830cea1ec0d149231")
    // }, {
    //     $set: {completed: true}
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // }, err => {
    //     console.log("The update failed, ", err);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5b5ef6479f9a520963c29e00")
    }, {
        $set: {title: "Legacy is but a hindrance"},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    }, err => {
        console.log("The update failed, ", err);
    });

    client.close();
});