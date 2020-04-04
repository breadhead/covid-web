const nextRoutes = require('next-routes');

module.exports = nextRoutes()
  // main routes
  .add('system', '/', 'landing')
  .add('ask', '/ask', 'ask')
  .add('request', '/request', 'landing/request')
  .add('volunteer', '/volunteer', 'landing/volunteer')
  .add('become-partner', '/help-partners', 'landing/help-partners')
  .add('hospital-aid', '/hospital-aid', 'landing/hospital-aid')
  .add('request-chat', '/request/chat', 'landing/request-chat')
  .add('landing-partners', '/partners/:id?', 'landing/partners')
  .add('landing-contacts', '/contacts', 'landing/contacts')
  .add('landing-experts', '/experts', 'landing/experts')
  .add('landing-expert', '/experts/:id', 'landing/expert')
  .add('landing-for-hospitals', '/for-hospitals', 'landing/for-hospitals');
