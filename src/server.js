const express = require('express')
const path = require('path')
require('dotenv').config();

console.log(">>> check env: ", process.env);

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME || 'localhost'

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('<h1>Check New Route!</h1>')
})

app.get('/sample', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
