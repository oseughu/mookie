import {
  login,
  loginPage,
  logout,
  register,
  registerPage
} from '#controllers/auth.controller'
import checkAuth from '#middleware/checkAuth'
import { Router } from 'express'

const authRouter = Router()

authRouter.get('/register', registerPage)
authRouter.post('/register', register)
authRouter.get('/login', loginPage)
authRouter.post('/login', login)
authRouter.get('/logout', checkAuth, logout)

export default authRouter
