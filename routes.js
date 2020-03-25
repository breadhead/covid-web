const nextRoutes = require('next-routes')

module.exports = nextRoutes()
  // main routes
  .add('landing', '/', 'landing')
  .add('request', '/request', 'landing/request')
  .add('landing-partners', '/partners/:id?', 'landing/partners')
  .add('landing-contacts', '/contacts', 'landing/contacts')
  .add('landing-experts', '/experts', 'landing/experts')
  .add('landing-expert', '/experts/:id', 'landing/expert')


