import {MongoClient} from 'mongodb';

MongoClient.connect('mongodb://localhost:27017/');

let taskSchema = new MongoClient.Schema({
    task_desc: String,
    date_time: {type: Date, default: Date.now},
    difficulty: String, 
    important: Boolean,
    complete: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);