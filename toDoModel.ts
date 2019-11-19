'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('Tasks', Task);