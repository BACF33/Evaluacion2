const routes = require('express').Router();
const {register, verifyEmail, login, logout, forgotPassword, resetPassword, getAll, getById, update, remove} = require('../controllers/pacienteController')

routes('/paciente/register').post(register)
routes('/paciente/verifyEmail').post(verifyEmail)
routes('/paciente/login').post(login)
routes('/paciente/logout').post(logout)
routes('/paciente/forgotPassword').post(forgotPassword)
routes('/paciente/resetPassword').put(resetPassword)
routes('/paciente/getAll').get(getAll)
routes('/paciente/getById').get(getById)
routes('/paciente/update').put(update)
routes('/paciente/remove').delete(remove)