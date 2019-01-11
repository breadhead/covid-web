const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  // main routes
  .add('test', '/test', 'main-test')
  .add('manager', '/manager', 'main-manager')
  .add('doctor', '/doctor', 'main-doctor')
  // landing
  .add('landing', '/', 'landing')
  .add('landing-partners', '/landing/partners', 'landing/partners')
  // client
  .add('client-claims', '/client', 'client/claims')
  .add(
    'client-before-consultation',
    '/client/before-consultation',
    'client/before-consultation',
  )
  .add('client-new-claim', '/client/new-claim/:id?', 'client/new-claim')
  .add('client-consultation', '/client/consultation/:id', 'client/consultation')
  .add('client-situation', '/client/claim/:id/situation', 'client/situation')
  .add('client-questions', '/client/claim/:id/questions', 'client/questions')
  .add(
    'client-quota-waiting',
    '/client/claim/wait/:email',
    'client/quota-waiting',
  )
  .add(
    'client-form-finish',
    '/client/claim/form-finish/:email',
    'client/form-finish',
  )
  // admin
  .add('admin-home', '/admin', 'admin/quotas')
  .add('admin-transfer', '/admin/transfer', 'admin/transfer')
  .add('admin-quota', '/admin/quota/:id', 'admin/quota')
  .add('admin-create-quota', '/admin/create-quota', 'admin/create-quota')
  .add('admin-edit-quota', '/admin/quota/edit/:id', 'admin/edit-quota')
  .add('admin-history', '/admin/history', 'admin/history')
