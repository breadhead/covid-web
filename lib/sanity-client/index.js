const sanityClient = require('@sanity/client')({
  projectId: '1wtssm4e',
  dataset: 'production',
  token: '',
  useCdn: true,
})
exports.sanityClient = sanityClient
