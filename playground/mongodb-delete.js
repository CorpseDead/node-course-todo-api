const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, client) => {
    if(error) {
        return console.log("Unable to connect to MongoDB server");
    }  
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    const textV1 = " items have been deleted.", textV2 = " item has been deleted";

    // //deleteMany
    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then(result => {
    //     console.log(`Delete status ${result.result.ok}. ${result.result.n > 1 ?
    //                                 result.result.n + textV1 :
    //                                 result.result.n + textV2}`);
    // }, err =>{
    //     console.log("Unable to delete items: ", err);
    // });


    // //deleteOne
    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then(result => {
    //     console.log(`Delete status ${result.result.ok}. ${result.result.n + textV2}`);
    // }, err =>{
    //     console.log("Unable to delete items: ", err);
    // })

    
    //findOneAndDelete
    db.collection("Todos").findOneAndDelete({completed: false}).then(result => {
        console.log(result);
    }, err => {
        console.log("Unable to delete items: ", err);
    });
    client.close();

    //findOneAndDelete
    db.collection("Users").findOneAndDelete({username: "Thomas the train"}).then(result => {
        console.log(result);
    }, err => {
        console.log("Unable to delete items: ", err);
    });
    client.close();
});