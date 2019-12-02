import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

var Task = require('./todoModel')
var User = require('./users')
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//mongoose.connect('mongodb://[server]/tasks');
mongoose.connect('mongodb://localhost:27017/tasks');
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/tasks/add').post((req, res) => {
    let task = new Task(req.body);
    task.save()
        .then(task => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/tasks').get((req, res) => {
    Task.find((err, tasks) => {
        if (err)
            console.log(err);
        else
            res.json(tasks);
    });
});

router.route('/tasks/:id').get((req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if (err)
            console.log(err);
        else
            res.json(task);
    })
});

router.route('/tasks/update/:id').post((req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if (task){
            task.name = req.body.name;
            task.due_date = req.body.due_date;
            task.status = req.body.status;
            task.priority = req.body.priority;
            

            task.save().then(task => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/tasks/delete/:id').get((req, res) => {
    Task.findByIdAndRemove({_id: req.params.id}, (err, task) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));