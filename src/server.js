const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME || 'localhost';
const connection = require('./config/database');

//config view engine for ejs
configViewEngine(app);

//use web routes
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
