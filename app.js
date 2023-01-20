const express = require("express");
require("dotenv").config();
const app = express();
const configs = require("./database/config/routes");

const db = require("./database/models");

configs(app);

db.sequelize.sync({ alter: true }).then((req, res) => {
  app.listen(8080, function (res) {
    console.log(`Server running on port http://localhost:8080`);
  });
});
module.exports = app;
