import * as React from 'react'

import Layout from '../../../organisms/Layout'
import Claims from '../organisms/Claims'
import Title from '../organisms/Title'

const ClaimsPage = () => (
  <Layout>
    <Title />
    {/* <Claims claims={['dsd', 'add', 'ds', 'ddsad', 'gfd', 'fdsf', 'fdsfsd', 'sdas']} /> */}
    <Claims claims={['dsd', 'add']} />
  </Layout>
)

export default ClaimsPage
