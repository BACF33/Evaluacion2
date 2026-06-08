const routes = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/expedienteController')
const {verifyToken} = require('../middlewares/auth')

router.post('/', create)
router.get('/', getAll)
router.put('/', update)
router.delete('/', remove)