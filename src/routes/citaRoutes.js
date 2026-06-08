const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/citaController')
const {verifyToken} = require('../middlewares/auth')

routes.post('/', verifyToken, create)
routes.get('/', verifyToken, getAll)
routes.put('/', verifyToken, update)
routes.delete('/', verifyToken, remove)

module.exports = routes