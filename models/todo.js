const mongoose = require('mongoose');
const {Schema} = mongoose;

const newSchema = new Schema({
    name: {
        type: String
    },
    done: {
        type: Boolean
    }
});

const Todo = mongoose.model('Todo', newSchema);
module.exports = Todo;