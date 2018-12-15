import * as React from 'react'

import Layout from '../../../organisms/Layout'
import Claims from '../organisms/Claims'
import Title from '../organisms/Title'

const LandingPage = () => (
  <Layout>
    <Title />
    <Claims claims={['dsd', 'add']} />
  </Layout>
)

export default LandingPage
