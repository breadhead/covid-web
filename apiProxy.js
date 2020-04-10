const redisClient = require('redis').createClient({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
});
const { promisify } = require('util');

const sanity = require('./src/lib/sanity-client/index.js');

const getFromRedis = promisify(redisClient.get).bind(redisClient);

module.exports = function (req, res) {
  const { type, params } = req.params;

  switch (type) {
    case 'query':
      return getFromRedis(params)
        .then((data) => {
          data = JSON.parse(data);
          if (data === null) {
            throw new Error('Data is null');
          }

          return res.json(data);
        })
        .catch(() => {
          sanity.sanityClient
            .fetch(params, { active: true })
            .then((data) => {
              if (typeof data === 'object') {
                res.json(data);
                data = JSON.stringify(data);
              }

              redisClient.set(params, data);
            })
            .catch((error) => {
              console.error(error);
            });
        });

    case 'flush':
      console.log('=======================redis=============================');
      console.log('=======================redis=============================');
      console.log('=======================redis=============================');
      redisClient.flushdb();
      return res.json({ flushed: true });

    default:
      res.status(400);
      return res.send('Bad request');
  }
};
