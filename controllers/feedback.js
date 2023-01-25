const db = require("../database/models");
const feedback = require("../database/models/feedback");
module.exports = {

    // change name to createSubscriber
  postfeedback: async (req, res) => {
    // if else ?
    console.log(req.body);
    const { firstName, lastName, email, reviews } = req.body;
    
    try {
      if(req.body.email && req.body.email!=""){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(regex)){
          let Data ={}

          if ( req.body.firstName) {
            Data.firstName = firstName
          }
          if ( req.body.lastName) {
            Data.lastName = lastName
          }
          if ( req.body.email) {
            Data.email = email
          }
          if ( req.body.reviews) {
            Data.reviews = reviews
          }
          const response = await db.feedback.create(Data);

          return res.status(200).json(response);
        }else{
            res.status(400).send('Please enter correct email')
        }
      }else{
        return res.status(404).send('Enter Email address')
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};
