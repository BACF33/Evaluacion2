const routes = require('express').Router();
const {getAll, update, remove} = require('../controllers/pacienteController.js')
const {verifyToken} = require('../middlewares/auth.js')

//routes.post('/paciente/register', verifyToken, register)
//routes.put('/paciente/verifyEmail', verifyToken, verifyEmail)
//routes.get('/paciente/login', verifyToken, login)
//routes.put('/paciente/logout', verifyToken, logout)
//routes.put('/paciente/forgotPassword', verifyToken, forgotPassword)
//routes.put('/paciente/resetPassword', verifyToken, resetPassword)
routes.get('/paciente/getAll', verifyToken, getAll)
//routes.get('/paciente/getById', verifyToken, getById)
routes.put('/paciente/update', verifyToken, update)
routes.delete('/paciente/remove', verifyToken, remove)

//register, verifyEmail, login, logout, forgotPassword, resetPassword, 