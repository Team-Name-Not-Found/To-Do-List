var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    var schema= new Schema({
      task_desc:  { type: String},
      date_time: { type: Date, default: Date.now },
      difficulty: {type: Number},
      important: {type: Boolean},
      complete: {type: Boolean}
    }); 

    var myobj = { 
      description: "homework", 
      date_time: 2019-10-23,
      difficulty: 3,
      important: true,
      complete: true
     };
     dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("collection created");
      db.close();
    });
  });