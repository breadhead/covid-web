const withCSS = require('next-css-unpluggable')
const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const withOptimizedImages = require('next-optimized-images')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-plugin')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './ui/antd-custom.less'), 'utf8'),
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withPlugins(
  [
    [withTypescript],
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
      publicRuntimeConfig: {
        backUrl: process.env.BACK_URL || 'http://localhost:3000',
        siteUrl: process.env.BACK_URL || 'http://localhost:3000',
      },
    },
  ],
  {
    webpack: config => {
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
      )

      return config
    },
  },
)
