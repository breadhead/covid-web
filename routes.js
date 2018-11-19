const nextRoutes = require('next-routes')


module.exports = nextRoutes()
  // admin routes
  .add('transfer', '/transfer', 'admin-transfer')
  .add('quota', '/quota/:id', 'admin-quota')
  .add('create-quota', '/create-quota', 'admin-create-quota')
  .add('history', '/history', 'admin-history')
  .add('login', '/login', 'admin-login')
  .add('quotas', '/quotas', 'admin-quotas')
  // main routes
  .add('home', '/', 'main-index')
