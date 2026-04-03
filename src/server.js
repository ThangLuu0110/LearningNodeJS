require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME || 'localhost';
const mysql = require('mysql2');

//config view engine for ejs
configViewEngine(app);

//use web routes
app.use('/', webRoutes);

// test connect to server
// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3307,
  user: process.env.DB_USER || 'root',
  database: process.env.DB_NAME || 'hoidanit',
  password: process.env.DB_PASSWORD || '123456'
});

connection.query(
  'SELECT * from Users u;',
  function (err, results, fields) {
    console.log(">>> Results:", results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
