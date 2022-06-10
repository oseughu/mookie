import { register, registerPage } from '#controllers/register.controller'
import { Router } from 'express'

export const regRouter = Router()

regRouter.get('/register', registerPage)
regRouter.post('/register', register)
