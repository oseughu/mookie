import { homePage } from '#controllers/home.controller'
import { Router } from 'express'

export const homeRouter = Router()

homeRouter.get('/', homePage)
