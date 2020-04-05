const nextRoutes = require('next-routes');

module.exports = nextRoutes()
  // main routes
  .add('system', '/', 'landing')
  .add('ask', '/ask', 'ask')
  .add('request', '/request', 'landing/request')
  .add('help-volunteers', '/help-volunteers', 'landing/help-volunteers')
  .add('help-partners', '/help-partners', 'landing/help-partners')
  .add('hospital-aid', '/hospital-aid', 'landing/hospital-aid')
  .add('request-chat', '/request/chat', 'landing/request-chat')
  .add('landing-partners', '/partners/:id?', 'landing/partners')
  .add('landing-contacts', '/contacts', 'landing/contacts')
  .add('experts', '/experts', '/landing/experts')
  .add('expert', '/experts/:id', '/landing/expert')
  .add('ask-experts', '/ask/experts/', 'ask/experts')
  .add('ask-expert', '/ask/experts/:id', 'ask/expert')
  .add('landing-for-hospitals', '/for-hospitals', 'landing/for-hospitals')

  .add('icons-demo', '/icons-demo', 'icons-demo');
