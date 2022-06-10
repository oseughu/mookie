import { Router } from 'express'
import { login, loginPage, logout } from '#controllers/login.controller'

export const loginRouter = Router()

loginRouter.get('/login', loginPage)
loginRouter.post('/login', login)
loginRouter.get('/logout', logout)
