const connection = require('../config/database')

const getHomePage = (req, res) => {
    return res.render('home.ejs');
}

const getSamplePage = (req, res) => {
    res.render('sample.ejs')
}

const handleCreateUser = (req, res) => {
    console.log('>>> check req.body: ', req.body)
    res.send('Handle create new user')
} 
 
module.exports = {
    getHomePage,
    getSamplePage,
    handleCreateUser
}