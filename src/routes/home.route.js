import { Router } from 'express'
import { homePage } from '#controllers/home.controller'

export const homeRouter = Router()

homeRouter.get('/', homePage)
