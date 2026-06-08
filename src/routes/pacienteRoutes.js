const router = require('express').Router();
const {register, verifyEmail, login, logout, forgotPassword, resetPassword, getAll, getById, update, remove} = require('../controllers/pacienteController')
const {verifyToken} = require('../middlewares/auth')

router.post('/paciente/register', register)
router.routes('/paciente/verifyEmail', verifyEmail)
router.routes('/paciente/login', login)
router.routes('/paciente/logout', logout)
router.routes('/paciente/forgotPassword', forgotPassword)
router.routes('/paciente/resetPassword', resetPassword)
router.routes('/paciente/getAll', getAll)
router.routes('/paciente/getById', getById)
router.routes('/paciente/update', update)
router.routes('/paciente/remove', remove)