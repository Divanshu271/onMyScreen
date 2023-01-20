const express=require('express');
const subscriberController = require('../controllers/subscriber');
const routes= express.Router();

routes.post('/', subscriberController.postSubscriber)
// routes.get('/'||'/home', testController.get)
module.exports =routes;