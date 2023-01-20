const express=require('express');

const blogController = require('../controllers/blogs');

const routes= express.Router();


console.log("HelloTest");
routes.get('/', blogController.get)
// routes.get('/'||'/home', testController.get)
module.exports =routes;