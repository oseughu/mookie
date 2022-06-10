import { Router } from 'express'
import { register, registerPage } from '#controllers/register.controller'

export const regRouter = Router()

regRouter.get('/register', registerPage)
regRouter.post('/register', register)
