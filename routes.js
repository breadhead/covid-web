const nextRoutes = require('next-routes')
module.exports = nextRoutes().add('quota', '/quota/:id', 'quota')
module.exports = nextRoutes().add('quota-form', '/quota-form/:id')
