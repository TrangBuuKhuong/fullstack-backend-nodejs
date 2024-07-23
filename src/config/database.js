const mysql = require('mysql2/promise');
require('dotenv').config()
// create the connection pool to database
  const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,//default 3306
    user: process.env.DB_USER,//default empty
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  });
  module.exports=connection