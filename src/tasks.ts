var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    task_desc: String,
    date_time: {type: Date, default: Date.now},
    difficulty: String, 
    important: Boolean,
    complete: Boolean
});

module.exports = mongoose.model('tasks', taskSchema);