const db = require("../database/models");
const nodeMailer=require('nodemailer')
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
          console.log(Data , );
          const response = await db.feedback.create(Data);
          let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'divansh271@gmail.com', // generated ethereal user
              pass: 'vrsjpacdiouooeme', // generated ethereal password
            },
            tls:{
              rejectUnauthorized:false
            }
          });
        

          let data =  `<html>
          <body>
          <p>Hello Sir/Ma'am</p>
          <p>Thanks for sending precious feedback for my reference i'll surely consider this and will tryna' improve my website you can check your details given below:</p>
          <ul>
          <li>firstName : ${req.body.firstName}</li>
          <li>lastName : ${req.body.lastName}</li>
          <li>Email : ${req.body.email}</li>
          <li>Your Review : ${req.body.reviews}</li>
          </ul>
          <p>Ok so you can add another review if you want to too </p>
          <p>Thanks for visiting my website</p>
          </body>
          </html>`
          console.log(transporter);
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Divanshu Zinta" <divansh271@gmail.com>', // sender address
            to: req.body.email,
            subject: "Thanking Mail for visting my website", // Subject line
            text: "hello?", // plain text body
            html: data, // html body
          });
          transporter.sendMail(info, (error, info)=>{
            if (error){
              return console.log(error)
            }


            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          })



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
