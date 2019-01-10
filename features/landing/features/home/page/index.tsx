import * as React from 'react'

import * as styles from './Landing.css'

import Main from '@app/features/landing/organisms/Main'
import Layout from '@app/features/main/layout'

const LandingPage = () => (
  <Layout className={styles.main}>
    <Main />
  </Layout>
)

export default LandingPage
