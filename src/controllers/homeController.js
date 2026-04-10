const connection = require('../config/database')

const getHomePage = (req, res) => {
    const query = 'SELECT id, email, name, city FROM Users';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching users:', error);
            return res.status(500).send('Error fetching users');
        }

        return res.render('home.ejs', { users: results });
    });
}

module.exports = {
    getHomePage
}