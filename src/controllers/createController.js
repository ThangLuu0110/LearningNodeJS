const { createUser } = require('../services/CRUDServices')

const getCreateUserPage = (req, res) => {
    return res.render('create.ejs');
}

const handleCreateUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await createUser(user);
        console.log('result: ', result);
        res.redirect('/');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
}

module.exports = {
    getCreateUserPage,
    handleCreateUser
}   