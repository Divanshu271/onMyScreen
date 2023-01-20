const blogsRouter = require('../../routes/blogs')
const subscriberRouter = require('../../routes/subscriber')
const feedbackRouter = require('../../routes/feedback')
const express=require("express")
// const app = express();

module.exports = function(app){

  console.log("TEST1");
  app.use('/blogs', blogsRouter);
  app.use('/subscriber', subscriberRouter);
  app.use('/feedback', feedbackRouter);
//   app.use('/otp', otpRouter )
//   app.use('/services',serviceRouter)
//   app.use('/interest',interestRouter)
//   app.use('/group', groupRouter);

}