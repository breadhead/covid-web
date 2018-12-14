const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  // main routes
  .add('claim', '/claim', 'main-claim')
  .add('test', '/test', 'main-test')
  .add('client', '/client', 'main-client')
  .add('manager', '/manager', 'main-manager')
  .add('doctor', '/doctor', 'main-doctor')
  // landing
  .add('landing-home', '/', 'landing/home')
  // client
  .add('client-claims', '/client/claims', 'client/claims')
  // admin
  .add('admin-home', '/admin', 'admin/quotas')
  .add('admin-transfer', '/admin/transfer', 'admin/transfer')
  .add('admin-quota', '/admin/quota/:id', 'admin/quota')
  .add('admin-create-quota', '/admin/create-quota', 'admin/create-quota')
  .add('admin-edit-quota', '/admin/quota/edit/:id', 'admin/edit-quota')
  .add('admin-history', '/admin/history', 'admin/history')
