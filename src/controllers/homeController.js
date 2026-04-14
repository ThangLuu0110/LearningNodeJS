const { getAllUsers, getUserById, updateUser, deleteUser } = require('../services/CRUDServices')

const getHomePage = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.render('home.ejs', { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
}

const handleShowUpdatedUser = async (req, res) => {
    try{
        const user = await getUserById(req.params.userId);
        return res.render('update.ejs', {user} );
    } catch (error) {
        res.status(500).send('Error fetching user');
    }
    
}

const handleUpdateUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await updateUser(user);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error updating user');
    }
}

const handleDeleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const results = await deleteUser(userId);
        res.redirect('/');
    } catch (error) {
        res.status(500).send('Error deleting user');
        
    }
}

module.exports = {
    getHomePage,
    handleShowUpdatedUser,
    handleUpdateUser,
    handleDeleteUser
}