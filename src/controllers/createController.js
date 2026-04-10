const connection = require('../config/database')

const getCreateUserPage = (req, res) => {
    return res.render('create.ejs');
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
    getCreateUserPage,
    handleCreateUser
}   