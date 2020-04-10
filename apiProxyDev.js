const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = createProxyMiddleware({
  target: process.env.PROD_IMGPROXY_URL || 'localhost:3001',
  changeOrigin: true,
});

module.exports = proxy;
