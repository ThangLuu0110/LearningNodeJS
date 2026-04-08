const connection = require('../config/database')

const getHomePage = (req, res) => {
    return res.render('home.ejs');
}

const getSamplePage = (req, res) => {
    res.render('sample.ejs')
}

const handleCreateUser = (req, res) => {
    const { email, name, city } = req.body;
    const query = 'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)';
    connection.query(query, [email, name, city], (error, results) => {
        if (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Error creating user');
        } else {
            res.send('User created successfully');
        }
    });
}

module.exports = {
    getHomePage,
    getSamplePage,
    handleCreateUser
}