var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
//var misc = require('../config/passport')(passport);

var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var User = require("../models/User");
var Records = require("../models/Record");

router.get('/', function(req, res, next) {
    res.send('Express RESTful API');
  });

router.post('/signup', function(req, res)
{
    if(!req.body.username || !req.body.password)
    {
        res.json({success: false, msg: 'Please pass username and password'});
    }
    else
    {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        newUser.save(function(err)
        {
            if(err)
            {
                return res.json({success: false, msg: 'username already exists'});
            }
            res.json({success: true, msg: 'Successful created new user'});
        });
    }
});

router.post('/signin', function(req, res)
{
    User.findOne(
        {
        username: req.body.username
        }, function(err, user)
        {
            if(err) throw err;
            if(!user)
            {
                res.status(401).send({success:false, msg: 'Authentication failure. User not founc'});
            }
            else
            {
                user.comparePassword(req.body.password, function(err, isMatch)
                {
                    if(isMatch && !err)
                    {
                        var token = jwt.sign(user.toJSON(), config.secret);
                        res.json({success: true, token : 'JWT ' + token});
                    }
                    else
                    {
                        res.status(401).send({success: false, msg: 'Authentication failure. Correct Username, Wrong password'});
                    }
                });
            }
        }
    );
});

router.post('/record', passport.authenticate('jwt', {session: false}), function(req,res)
{
    var token = getToken(req.headers);
    if(token)
    {
        console.log(req.body);
        var newRecord = new Records({
            task_desc: req.body.task_desc,
            date_time: req.body.date_time,
            difficulty: req.body.difficulty,
            importaint: req.body.importaint,
            compleate: req.body.compleate
        });
        newRecord.save(function(err)
        {
            if(err)
            {
                return res.json({success: false, msg: 'Save record failed'});
            }
            res.json({success: true, msg: 'Succesfully created a new record'});
        });
    }
    else
    {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.get('/record', passport.authenticate('jwt', {
session:false}), function(req, res)
{
    var token = getToken(req.headers);
    if(token)
    {
        Records.find(function(err, Records){
            if(err) return next(err);
            res.json(Records);
        });
    }
    else
    {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

getToken = function(headers)
{
    if(headers && headers.authorization)
    {
        var parted = headers.authorization.split(' ');
        if(parted.length === 2)
        {
            return parted[1];
        }
        else
        {
            return null;
        }
    }
    else
    {
        return null;
    }
};

module.exports = router;