const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  // main routes
  .add('manager', '/manager', 'main-manager')
  .add('doctor', '/doctor', 'main-doctor')
  // landing
  .add('landing', '/', 'landing')
  .add('landing-partners', '/partners/:id?', 'landing/partners')
  .add('landing-contacts', '/contacts', 'landing/contacts')
  .add('landing-experts', '/experts', 'landing/experts')
  .add('landing-expert', '/experts/:id', 'landing/expert')
  // client
  .add('client-claims', '/client', 'client/claims')
  .add(
    'client-before-consultation',
    '/client/new-claim/rules',
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
  .add(
    'client-wait-please',
    '/client/claim/wait-please/:email',
    'client/form-finish',
  )
  .add('preview-image', '/preview-image/:img', 'client/preview-image')

  // admin
  .add('admin-home', '/admin', 'admin/quotas')
  .add('admin-transfer', '/admin/transfer', 'admin/transfer')
  .add('admin-quota', '/admin/quota/:id', 'admin/quota')
  .add('admin-create-quota', '/admin/create-quota', 'admin/create-quota')
  .add('admin-edit-quota', '/admin/quota/edit/:id', 'admin/edit-quota')
  .add('admin-history', '/admin/history', 'admin/history')
  .add('admin-stats', '/admin/stats', 'admin/stats')
  .add('admin-linechart', '/admin/linechart:id', 'admin/linechart')
  // manager
  .add(
    'manager-consultation',
    '/manager/consultation/:id',
    '/manager/consultation',
  )
  .add('manager-edit-new-claim', '/manager/new-claim/:id', 'manager/new-claim')
  .add('manager-situation', '/manager/claim/:id/situation', 'manager/situation')
  .add('manager-questions', '/manager/claim/:id/questions', 'manager/questions')
  .add(
    'manager-client-claims',
    '/manager/client/:authorLogin/claims',
    'manager/client-claims',
  )

  // doctor
  .add('doctor-consultation', '/doctor/consultation/:id', 'doctor/consultation')
  .add('doctor-answers', '/doctor/answers/:id', 'doctor/answers')
  // redirecter
  .add(
    'consultation-redirecter',
    '/consultation/redirect/:id',
    'consultationRedirecer',
  )
