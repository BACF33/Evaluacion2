const router = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/equipoController')
const {verifyToken} = require('../middlewares/auth')

router.post('/', create)
router.get('/', getAll)
router.put('/', update)
outer.delete('/', remove)