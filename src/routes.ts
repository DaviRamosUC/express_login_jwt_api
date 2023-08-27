import { Router } from 'express'

import authRoutes from '@/app/Auth/routes'
import userRoutes from '@/app/Users/routes'

const routes = Router()

routes.use(authRoutes).use(userRoutes)

export default routes
