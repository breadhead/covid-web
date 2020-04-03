const withCSS = require('next-css-unpluggable');
const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
const withOptimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-plugin');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './ui/antd-custom.less'), 'utf8'),
);

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {
    // pass
  };
}

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: ['query-string'],
      },
    ],
    [
      withOptimizedImages,
      {
        optimizeImages: false,
      },
    ],
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables, // make your antd custom effective
        },
      },
    ],
    [
      withCSS,
      {
        cssModules: true,
      },
    ],
    {
      serverRuntimeConfig: {
        BUGSNAG_API_KEY: process.env.BUGSNAG_SERVER_API_KEY || 'mememe',
      },
      publicRuntimeConfig: {
        backUrl: process.env.BACK_URL || 'https://api.defeatcovid.ru/',
        siteUrl: process.env.SITE_URL || 'http://localhost:3001',
        BUGSNAG_API_KEY: process.env.BUGSNAG_BROWSER_API_KEY || 'mememe',
        prodUrl: process.env.PROD_URL || 'https://defeatcovid.ru/',
        storageUrl: process.env.STORAGE_URL || 'https://image.defeatcovid.ru',
      },
    },
  ],
  {
    webpack: (config) => {
      config.plugins.unshift(
        new IgnoreNotFoundExportPlugin([
          'Actions',
          'Props',
          'State',
          'WithLoginModal',
          'WithModalProps',
          'WithQuotaTypeModal',
          'WithBindQuotaModal',
          'WithSignUpModal',
          'Validator',
          'FormFinish',
          'WithCloseClaimModal',
          'FetchingState',
          'WithChooseDoctorModal',
          'RemoveSection',
        ]),
      );

      return config;
    },
  },
);
