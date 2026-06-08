const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/expedienteController')

routes('/expediente/create').post(create)
routes('/expediente/getAll').get(getAll)
routes('/expediente/update').put(update)
routes('/expediente/remove').delete(remove)