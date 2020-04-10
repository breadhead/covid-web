const nextRoutes = require('next-routes');

module.exports = nextRoutes()
  // landing
  .add('system', '/', 'landing')
  .add('request', '/request', 'landing/request')
  .add('help-volunteers', '/help-volunteers', 'landing/help-volunteers')
  .add('help-partners', '/help-partners', 'landing/help-partners')
  .add('hospital-aid', '/hospital-aid', 'landing/hospital-aid')
  .add('request-chat', '/request/chat', 'landing/request-chat')
  .add('landing-partners', '/partners', 'landing/partners')
  .add('landing-contacts', '/contacts', 'landing/contacts')
  .add('experts', '/supervisory', '/landing/experts')
  .add('expert', '/supervisory/:id', '/landing/expert')
  .add('landing-for-hospitals', '/for-hospitals', 'landing/for-hospitals')
  .add('landing-for-doctors', '/for-doctors', 'landing/for-doctors')
  .add('for-doctors-article', '/for-doctors/:id', 'landing/for-doctors-article')
  .add('landing-news', '/news', 'landing/news')
  .add('landing-news-item', '/news/:id', 'landing/news-item')
  // ask
  .add('ask-experts', '/ask/experts/', 'ask/experts')
  .add('ask-expert', '/ask/experts/:id', 'ask/expert')
  .add('ask', '/ask', 'ask')

  .add('icons-demo', '/icons-demo', 'icons-demo');
