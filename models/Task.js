var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//task_desc
//date_time
//difficulty
//importaint
//compleate
var TaskSchema = new Schema(
    {
        task_desc:
        {
            type: String,
            required: true
        },
        date_time:
        {
            type: Date,
            default: Date.now
        },
        difficulty:
        {
            type: String,
            required: true
        },
        importaint:
        {
            type: Boolean,
            required: true
        },
        compleate:
        {
            type: Boolean,
            required: true
        }
    }
);

module.exports = mongoose.model('Task', TaskSchema)