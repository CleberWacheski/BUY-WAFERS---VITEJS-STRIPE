import { Router } from 'express'
import { striperController } from '../controllers/striperController'

const routes = Router()

routes.get('/products', striperController.list)
routes.post('/products', striperController.checkout)

export { routes }
