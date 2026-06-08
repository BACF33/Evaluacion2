const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/especialidadController')

routes('/especialidad/create').post(create)
routes('/especialidad/getAll').get(getAll)
routes('/especialidad/update').put(update)
routes('/especialidad/remove').delete(remove)