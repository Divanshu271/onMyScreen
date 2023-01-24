const blogsRouter = require('../../routes/blogs')
const feedbackRouter = require('../../routes/feedback')
const searchRouter = require('../../routes/search')
// const app = express();

module.exports = function(app){

  console.log("TEST1");
  app.use('/blogs', blogsRouter);
  app.use('/blogs/feedback', feedbackRouter);
  app.use('/blogs/search', searchRouter);
//   app.use('/services',serviceRouter)
//   app.use('/interest',interestRouter)
//   app.use('/group', groupRouter);
}