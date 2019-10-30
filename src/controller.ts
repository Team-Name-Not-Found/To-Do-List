import express from "express";

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

export class Controller {
    public getTask(req: express.Request, res: express.Response): void {

    }

    public postTask(req: express.Request, res: express.Response): void {

    }

    public deleteTask(req: express.Request, res: express.Response): void {

    }

    public updateTask(req: express.Request, res: express.Response): void {

    }
}
