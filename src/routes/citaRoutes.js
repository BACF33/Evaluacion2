const router = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/citaController')
const {verifyToken} = require('../middlewares/auth')

router.post('/', create)
router.get('/cita/getAll', getAll)
router.update('/cita/update', update)
router.delete('/cita/remove', remove)