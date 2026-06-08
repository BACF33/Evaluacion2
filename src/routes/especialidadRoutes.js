const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/especialidadController')
const {verifyToken} = require('../middlewares/auth')

routes.post('/', create)
routes.get('/', getAll)
routes.put('/', update)
routes.delete('/', remove)