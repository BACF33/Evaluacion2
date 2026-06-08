const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/citaController')

routes('/cita/create').post(create)
routes('/cita/getAll').get(getAll)
routes('/cita/update').put(update)
routes('/cita/remove').delete(remove)