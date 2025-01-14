const cors=require('cors');
const express = require("express");
require("dotenv").config();
const app = express();
const configs = require("./database/config/routes");
const nodeMailer=require('nodemailer');

const db = require("./database/models");
PORT=process.env.PORT || 8080
app.use(express.json())

// CORS SETUP
app.use(cors())
app.use((res, req, next)=> {
    res.header("Acess-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods",
    "GET, HEAD, OPTIONS, POST, PUT, DELETE"
    );
    res.header("Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next()
})

configs(app);
app.listen(PORT, async () => {
  try {
      await db.sequelize.authenticate();
      await db.sequelize.sync()
      console.log('Connection has been established successfully.');   
      console.log(`Server is running on http://localhost:${PORT}/blogs`);
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
}
)