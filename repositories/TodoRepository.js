const Todo = require('../models/todo');

class TodoRepository{
    constructor(model){
        this.model = model;
    }

    // Find all name 
    // constructor 


    // Create a new todo
    create(name){
        const newTodo = {name,done:false};
        const todo = this.model(newTodo);

        return todo.save();
    }

    findAll(){
        return this.model.find();
    }

    findById(id){
        return this.model.findById(id);
    }

    findDelete(id){
        return this.model.findByIdAndDelete(id);
    }
}