const { getAllUsers } = require('../services/CRUDServices')

const getHomePage = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.render('home.ejs', { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
}

const handleUpdateUser = (req, res) => {
    return res.render('update.ejs');
}

module.exports = {
    getHomePage,
    handleUpdateUser
}