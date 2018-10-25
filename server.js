const next = require('next')
const express = require('express')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());

  server.get(
    '*', (req, res) => {
      app.render(req, res, req.path, req.query)
    }
  )

  server.listen(3001)
});