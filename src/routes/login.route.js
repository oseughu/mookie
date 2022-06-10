import { login, loginPage, logout } from '#controllers/login.controller'
import { Router } from 'express'

export const loginRouter = Router()

loginRouter.get('/login', loginPage)
loginRouter.post('/login', login)
loginRouter.get('/logout', logout)
