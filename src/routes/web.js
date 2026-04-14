const express = require('express');
const router = express.Router();
const {getHomePage, handleShowUpdatedUser, handleUpdateUser, handleDeleteUser} = require('../controllers/homeController')
const {getCreateUserPage, handleCreateUser} = require('../controllers/createController') 

router.get('/', getHomePage)
router.get('/create', getCreateUserPage)
router.get('/update/:userId', handleShowUpdatedUser)

router.post('/create-user', handleCreateUser)
router.post('/update-user', handleUpdateUser)
router.post('/delete-user/:userId', handleDeleteUser)

module.exports = router; //export default router to use in server.js