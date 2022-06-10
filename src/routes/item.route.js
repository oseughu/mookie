import { itemsPage, searchItems } from '#controllers/item.controller'
import { Router } from 'express'

export const itemRouter = Router()

itemRouter.get('/items', itemsPage)
itemRouter.post('/items', searchItems)
