const express = require("express");
require("dotenv").config();
const app = express();
// const configs = require("./database/config/routes");

const db = require("./database/models");
PORT=process.env.PORT || 8080
// configs(app);
app.listen(PORT, async () => {
  try {
      await db.sequelize.authenticate();
      await db.sequelize.sync()
      console.log('Connection has been established successfully.');   
      console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
}
)