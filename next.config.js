const withCSS = require("next-css");

const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript(withCSS({
  cssModules: true,
}));
