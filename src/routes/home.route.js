import homePage from '#controllers/home.controller'
import { Router } from 'express'

const homeRouter = Router()

homeRouter.get('/', homePage)

export default homeRouter
