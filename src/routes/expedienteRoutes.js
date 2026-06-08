const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/expedienteController')
const {verifyToken} = require('../middlewares/auth')

router.post('/expediente/create', create)
router.get('/expediente/getAll', getAll)
router.put('/expediente/update', update)
router.delete('/expediente/remove', remove)