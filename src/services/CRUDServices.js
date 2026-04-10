const connection = require('../config/database')

const getAllUsers = async () => {
    try {
        const query = 'SELECT id, email, name, city FROM Users';
        const [results] = await connection.query(query);
        return results;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

const createUser = async (user) => {
    try {
        const { email, name, city } = user;
        if(!email || !name || !city) {
            return res.status(400).send('All fields are required');
        }
        const query = 'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)';
        const [results] = await connection.query(query, [user.email, user.name, user.city]);
        return results;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
}

module.exports = {
    getAllUsers,
    createUser
}