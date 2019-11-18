'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

interface ITodo {
	_id: string;
	created_date: Date;
	due_date: Date;
	status: string;
	priority: number;
}

const TaskSchema = new Schema({
    name: {
    	  type: String
},
created_date: {
    type:Date,
    default: Date.now
},
due_date: {
	  type:Date
},
status: {
   type: [{
    type:String,
    enum: ['pending', 'ongoing', 'complete']
 }]
},
priority: {
	  type: Number
}
});

const TodoModel = mongoose.model('Todo', TaskSchema);
export {TodoModel, ITodo}