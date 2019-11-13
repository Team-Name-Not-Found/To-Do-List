"use strict";

const repo = require('../repositories/TodoRepository');

Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    getTask(req, res) {
        repo.findAll().then((todos) => {
            res.send("Hello World");
        }).catch((error)=>{
            console.log(error);
        })
    }

    postTask(req, res) {
        const{name} = req.body;
        repo.create(name).then((todo) => {
            res.send(req.body);
        }).catch((error) => console.log(error));
    }

    deleteTask(req, res) {
        const{id} = req.params;
        repo.deleteById(id).then((ok) => {
            console.log(ok);
            console.log('Deleted record with id: ${id}');
            res.status(200).send(req.body);
        });
    }

    updateTask(req, res) {
        const{id} = req.params;
        const todo = {name: req.body.name, done: req.body.done};
        repo.updateById(id, todo).then(res.status(200).send(req.body)).catch((error) => console.log(error));
    }
}

exports.Controller = Controller;
//# sourceMappingURL=controller.js.map