import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/');

let taskSchema = new mongoose.Schema({
    task_desc: String,
    date_time: {type: Date, default: Date.now},
    difficulty: String, 
    important: Boolean,
    complete: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);