import { Router } from 'express'
import { homeRouter } from '#routes/home.route'
import { loginRouter } from '#routes/login.route'
import { regRouter } from '#routes/register.route'
import { itemRouter } from '#routes/item.route'

export const routes = Router()

routes.use(homeRouter)
routes.use(loginRouter)
routes.use(regRouter)
routes.use(itemRouter)
