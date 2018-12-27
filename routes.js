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
  .add('client-new-claim', '/client/new-claim', 'client/new-claim')
  .add('client-consultation', '/client/consultation', 'client/consultation')
  .add(
    'client-claim-step-2',
    '/client/claim/:id/situation',
    'client/edit-claim-step-2',
  )
  .add(
    'client-claim-step-3',
    '/client/claim/:id/questions',
    'client/edit-claim-step-3',
  )
  .add(
    'client-quota-waiting',
    '/client/claim/wait/:email',
    'client/quota-waiting',
  )
  // admin
  .add('admin-home', '/admin', 'admin/quotas')
  .add('admin-transfer', '/admin/transfer', 'admin/transfer')
  .add('admin-quota', '/admin/quota/:id', 'admin/quota')
  .add('admin-create-quota', '/admin/create-quota', 'admin/create-quota')
  .add('admin-edit-quota', '/admin/quota/edit/:id', 'admin/edit-quota')
  .add('admin-history', '/admin/history', 'admin/history')
