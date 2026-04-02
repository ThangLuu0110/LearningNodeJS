const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello The Whole New World!')
})

router.get('/abc', (req, res) => {
  res.send('<h1>Check New Route!</h1>')
})

router.get('/sample', (req, res) => {
  res.render('sample.ejs')
})

module.exports = router; //export default router to use in server.js