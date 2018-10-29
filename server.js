const next = require('next')
const express = require('express')
const cookieParser = require('cookie-parser')
const args = require('args-parser')(process.argv)

const FALLBACK_PORT = 3001

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



  server.listen(args.p || FALLBACK_PORT) // listen on port which is supplied as -p console argument
});