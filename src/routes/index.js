import { homeRouter } from '#routes/home.route'
import { itemRouter } from '#routes/item.route'
import { loginRouter } from '#routes/login.route'
import { regRouter } from '#routes/register.route'
import { Router } from 'express'

export const routes = Router()

routes.use(homeRouter, itemRouter, loginRouter, regRouter)
