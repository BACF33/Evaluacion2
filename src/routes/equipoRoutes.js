const router = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/equipoController')
const {verifyToken} = require('../middlewares/auth')

router.post('/', create)
rrouter.get('/', getAll)
rrouter.put('/', update)
router.delete('/', remove)