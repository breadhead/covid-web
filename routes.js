const nextRoutes = require('next-routes')


module.exports = nextRoutes()
  // admin routes
  .add('transfer', '/admin/transfer', 'admin-transfer')
  .add('quota', '/admin/quota/:id', 'admin-quota')
  .add('create-quota', '/admin/create-quota', 'admin-create-quota')
  .add('history', '/admin/history', 'admin-history')
  .add('login', '/admin/login', 'admin-login')
  .add('quotas', '/admin/quotas', 'admin-quotas')
  // main routes
  .add('home', '/', 'main-index')
