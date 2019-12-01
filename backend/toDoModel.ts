'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = new Schema({
name: {
    	  type: String
},
due_date: {
	  type:String
},
status: {
   type: [{
    type:String,
    enum: ['pending', 'ongoing', 'complete']
 }]
},
priority: {
      type: String,
      enum: ['Low', 'Medium', 'High']
}
});

module.exports = mongoose.model('Task', Task);
//export default mongoose.model('Task', Task);