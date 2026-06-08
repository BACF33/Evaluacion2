const router = require('express').Router();
const {register, verifyEmail, login, logout, forgotPassword, resetPassword, getAll, getById, update, remove} = require('../controllers/pacienteController')
const {verifyToken} = require('../middlewares/auth')

router.post('/paciente/register', register)
router.put('/paciente/verifyEmail', verifyEmail)
router.routes('/paciente/login', login)
router.routes('/paciente/logout', logout)
router.routes('/paciente/forgotPassword', forgotPassword)
router.put('/paciente/resetPassword', resetPassword)
router.get('/paciente/getAll', getAll)
router.get('/paciente/getById', getById)
router.put('/paciente/update', update)
router.delete('/paciente/remove', remove)