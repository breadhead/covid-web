const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  // main routes
  .add('test', '/test', 'main-test')
  .add('manager', '/manager', 'main-manager')
  .add('doctor', '/doctor', 'main-doctor')
  // landing
  .add('landing-home', '/', 'landing/home')
  // client
  .add('client-claims', '/client', 'client/claims')
  .add('client-claim', '/client/new-claim', 'client/new-claim')
  // admin
  .add('admin-home', '/admin', 'admin/quotas')
  .add('admin-transfer', '/admin/transfer', 'admin/transfer')
  .add('admin-quota', '/admin/quota/:id', 'admin/quota')
  .add('admin-create-quota', '/admin/create-quota', 'admin/create-quota')
  .add('admin-edit-quota', '/admin/quota/edit/:id', 'admin/edit-quota')
  .add('admin-history', '/admin/history', 'admin/history')
