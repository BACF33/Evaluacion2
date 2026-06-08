const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/especialidadController.js')
const {verifyToken} = require('../middlewares/auth.js')

routes.post('/', verifyToken, create)
routes.get('/', verifyToken, getAll)
routes.put('/', verifyToken, update)
routes.delete('/', verifyToken, remove)

module.exports = routes