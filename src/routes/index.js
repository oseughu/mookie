import authRouter from '#routes/auth.route'
import homeRouter from '#routes/home.route'
import itemRouter from '#routes/item.route'
import { Router } from 'express'

const routes = Router()

routes.use(homeRouter, itemRouter, authRouter)

export default routes
