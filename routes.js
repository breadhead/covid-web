const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  .add('quota', '/quota/:id', 'quota')
  .add('quota-form', '/quota-form/:id?', 'quota-form')
