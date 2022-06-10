import { Router } from 'express'
import { itemsPage, searchItems } from '#controllers/item.controller'

export const itemRouter = Router()

itemRouter.get('/items', itemsPage)
itemRouter.post('/items', searchItems)
