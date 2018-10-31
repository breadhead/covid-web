const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('quotas', '/quotas')
routes.add('quota', '/quota/:id')