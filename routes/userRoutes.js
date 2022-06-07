const userController = require('../controllers/userController')

module.exports = (app) => {
    app.get('/api/users/getAll', userController.getAll);
}