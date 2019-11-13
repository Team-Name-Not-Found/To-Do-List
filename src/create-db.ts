import {MongoClient} from 'mongodb';

//let MongoClient = mongodb.MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("ToDo");
    
    //example object in db
    let myobj = {
        description: "homework",
        date_time: 2019 - 10 - 23,
        difficulty: "3",
        important: true,
        complete: true
    };

    dbo.createCollection("tasks");
    if (err) throw err;
    console.log("created db");
    db.close();
});