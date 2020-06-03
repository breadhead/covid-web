const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const util = require('util');
const stream = require('stream');
const pipeline = util.promisify(stream.pipeline);
const exists = util.promisify(fs.exists);
const mkdir = util.promisify(fs.mkdir);

const root = path.resolve(__dirname, 'public', 'content');

module.exports = async (req, res) => {
  try {
    const filePath = path.resolve(root, req.params[0]);

    if (await exists(filePath)) {
      return res.sendFile(filePath);
    }

    const [urlQuery, ...urlPath] = req.params[0].split('/');
    const apiUrl = `https://cdn.sanity.io/${urlPath.join('/')}?${urlQuery}`;

    await mkdir(path.dirname(filePath), { recursive: true });

    const fileStream = fs.createWriteStream(filePath);

    const image = await fetch(apiUrl);

    await pipeline(image.body, fileStream);

    res.sendFile(filePath);
  } catch (e) {
    res.status(500);
    res.end(e);
  }
};
