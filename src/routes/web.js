const express = require('express');
const router = express.Router();
const {getHomePage, getSamplePage, handleCreateUser} = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/sample', getSamplePage)

router.post('/create-user', handleCreateUser)



module.exports = router; //export default router to use in server.js