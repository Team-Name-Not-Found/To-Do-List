import express from "express";
import { Controller } from "./controller";

export class ApiRouter {
    private router: express.Router = express.Router();
    private controller: Controller = new Controller();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/task", this.controller.getTask);
        this.router.post("/task", this.controller.postTask);
        this.router.delete("/task", this.controller.deleteTask);
        // this.router.update("/task", this.controller.updateTask);

        return this.router;
    }
}
