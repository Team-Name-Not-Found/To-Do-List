var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;

  var myobj = {
    description: "homework",
    date_time: 2019 - 10 - 23,
    difficulty: 3,
    important: true,
    complete: true
  };
  
  db.createCollection("tasks", {
    validator: {
      $jsonSchema: {
        required: [
          'task_desc',
          'date_time',
          'difficulty',
          'important',
          'complete'
        ],
        properties: {
          task_desc: {
            bsonType: 'string',
            description: 'must be a string input'
          },
          date_time: {
            bsonType: 'date',
            description: 'must be a valid date'
          },
          difficulty: {
            bsonType: 'string',
            'enum': [
              '1',
              '2',
              '3'
            ],
            description: 'must be either 1, 2, or 3'
          },
          important: {
            bsonType: 'bool',
            description: 'must be a boolean'
          },
          complete: {
            bsonType: 'bool',
            description: 'must be a boolean'
          }
        }
      }
    }
  })
  if (err) throw err;
  console.log("added obj 1");
  db.close();
});