const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/equipoController')
const {verifyToken} = require('../middlewares/auth')

routes('/equipo/create').post(create)
routes('/equipo/getAll').get(getAll)
routes('/equipo/update').put(update)
routes('/equipo/remove').delete(remove)