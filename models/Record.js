var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecordSchema = new Schema(
    {
        task_desc : 
        {
            type: String,
            required: true
        },
        date_time :
        {
            type: Date,
            default: Date.now,
            required: true
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
            type : Boolean,
            required: true
        }
        
    }
);

module.exports = mongoose.model('Records', RecordSchema);