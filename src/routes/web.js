const express = require('express');
const router = express.Router();
const {getHomePage} = require('../controllers/homeController')
const {getCreateUserPage, handleCreateUser} = require('../controllers/createController') 

router.get('/', getHomePage)
router.get('/create', getCreateUserPage)

router.post('/create-user', handleCreateUser)



module.exports = router; //export default router to use in server.js