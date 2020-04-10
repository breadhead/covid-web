const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');
const args = require('args-parser')(process.argv);
const cors = require('cors');

const apiProxyProd = require('./apiProxy');
const apiProxyDev = require('./apiProxyDev');
const routes = require('./routes');

const FALLBACK_PORT = 3001;
const PORT = args.p || FALLBACK_PORT;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = routes.getRequestHandler(app);
const apiProxy = dev ? apiProxyDev : apiProxyProd;

const assetsProxy = require('./assetsProxy');

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  server.use(cors());
  server.get('/content/*', assetsProxy);
  server.get('/api/:type/:params?', apiProxy);
  server.post('/api/:type/:params?', apiProxy);
  server.use(handler);

  server.get('*', (req, res) => {
    app.render(req, res, req.path, req.query);
  });

  server.listen(PORT);
});
