const nextRoutes = require('next-routes');

module.exports = nextRoutes()
  // landing
  .add('system', '/', 'landing')
  .add('request', '/request', 'landing/request')
  .add('help-volunteers', '/help-volunteers', 'landing/help-volunteers')
  .add('help-partners', '/help-partners', 'landing/help-partners')
  .add('hospital-aid', '/hospital-aid', 'landing/hospital-aid')
  .add('request-chat', '/request/chat', 'landing/request-chat')
  .add('landing-partners', '/partners/:id?', 'landing/partners')
  .add('landing-contacts', '/contacts', 'landing/contacts')
  .add('experts', '/experts', '/landing/experts')
  .add('expert', '/experts/:id', '/landing/expert')
  .add('landing-for-hospitals', '/for-hospitals', 'landing/for-hospitals')
  .add('landing-news', '/news', 'landing/news')
  .add('landing-news-item', '/news/:id', 'landing/news-item')
  // ask
  .add('ask-experts', '/ask/experts/', 'ask/experts')
  .add('ask-expert', '/ask/experts/:id', 'ask/expert')
  .add('ask', '/ask', 'ask')

  .add('icons-demo', '/icons-demo', 'icons-demo');
