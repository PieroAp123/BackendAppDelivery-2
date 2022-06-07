const db = require('../config/config');
const User = {};

User.getAll = () => {
    const sql = `SELECT * FROM users`;
    return db.manyOrOne(sql);
}

module.exports = User;

