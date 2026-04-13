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

const getUserById = async (userId) => {
    try {
        const query = 'SELECT id, email, name, city FROM Users WHERE id = ?';
        const [results] = await connection.query(query, [userId]);
        return results && results.length > 0 ? results[0] : {};
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

const updateUser = async (user) => {
    try {
        const { userId, email, name, city } = user;
        console.log(userId, email, name, city );
        if (!userId|| !email || !name || !city) {
            throw new Error('All fields are required');
        }

        const query = 'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?';
        const [results] = await connection.query(query, [email, name, city, userId]);
        return results;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser
}