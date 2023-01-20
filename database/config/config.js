const dotenv = require('dotenv/config');

const {
  DB_HOST, DB_PORT = 5432, DB_NAME, DB_USER, DB_PASSWORD,
} = process.env;

const development = {
  dialect: 'postgres',
  timezone: '+05:30',
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  ssl: true,
  define: {
    
    paranoid: true,
  },
};


module.exports = {development}

// module.exports.development= {
 

//     ...defaultConfig,
  
// };

// module.exports =  test = {
//   ...defaultConfig,
//   logging: false,
// };

// module.exports =  production = {
//   ...defaultConfig,
//   logging: false,
// };

