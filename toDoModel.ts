'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var sortTasks = (a, b) => {
//     return b.priority - a.priority;
//   };
var Task = new Schema({
    name: {
    	  type: String
},
Created_date: {
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

// Task.pre('save', function (next) {
//     this.sort(sortTasks);
//     next();
//   });
module.exports = mongoose.model('Tasks', Task);