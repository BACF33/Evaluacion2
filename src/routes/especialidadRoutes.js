const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/especialidadController')
const {verifyToken} = require('../middlewares/auth')

router.post('/especialidad/create', create)
router.get('/especialidad/getAll', getAll)
router.put('/especialidad/update', update)
router.delete('/especialidad/remove', remove)