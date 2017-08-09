const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const models = require("./models");
const userModel = require("./models/Users");
const postModel = require("./models/Posts");
const commentModel = require("./models/Comment");



mongoose.connect('mongodb://localhost:27017/Gobblebase');
mongoose.connection
    .once('open', () => console.log('good to go'))
    .on('error', (error) => {
      console.warn('Warning', error);
    });


const application = express();



application.get('/', (request, response) => {
    userModel.find()
      .then((users) => {
        response.json(users);
      });
});


application.get('/log_in', (request, response) => {
    //render the page
});

application.post('/log_in', (request, response) => {
    //query the users to find user name
    //validate the password
    //create session
    //redirect home
    //else redirect to log_in
});

application.get('/sign_up', (request, response) => {
    //render the page
});

application.post('/sign_up', (request, response) => {
    //validate info
    //create user
    const user = new userModel({ 
        prof_pic: request.body.url,
        username: request.body.name,
        password: request.body.password
    });
    user.save()
      .then(() => {
            response.redirect("/");
      });
    //create session
    //redirect to home
});

application.get('/home', (request, response) => {
    //validate session
    //query posts
    //render home
});

application.post('/home', (request, response) => {
    //create comment
    //redirect to home
});

application.put('/home', (request, response) => {
    //update post gobbles
    //redirect to home
});

application.get('/profile', (request, response) => {
    //query User
    //render the page
});

application.post('/profile', (request, response) => {
    //create post
    //redirect to profile
});


application.listen(3000);