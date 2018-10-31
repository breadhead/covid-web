const nextRoutes = require('next-routes')
module.exports = nextRoutes().add('quota', '/quota/:id', 'quota')
