const express = require('express');
const router = express.Router();
const {getHomePage, handleUpdateUser} = require('../controllers/homeController')
const {getCreateUserPage, handleCreateUser} = require('../controllers/createController') 

router.get('/', getHomePage)
router.get('/create', getCreateUserPage)
router.get('/update/:userId', handleUpdateUser)


router.post('/create-user', handleCreateUser)



module.exports = router; //export default router to use in server.js