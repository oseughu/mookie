import { itemsPage, searchItems } from '#controllers/item.controller'
import checkAuth from '#middleware/checkAuth'
import getItems from '#middleware/getItems'
import { Router } from 'express'

const itemRouter = Router()

itemRouter.get('/items', checkAuth, getItems, itemsPage)
itemRouter.post('/items', checkAuth, searchItems)

export default itemRouter
