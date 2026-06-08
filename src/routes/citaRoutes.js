const router = require('express').Router();
const {create, getAll, update, remove} = require('../controllers/citaController')
const {verifyToken} = require('../middlewares/auth')

router.post('/', create)
router.get('/', getAll)
router.update('/', update)
router.delete('/', remove)