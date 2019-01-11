import * as React from 'react'

import * as styles from './Home.css'

import Layout from '@app/features/main/layout'
import Corporate from '../organisms/Corporate'
import Donation from '../organisms/Donation'
import Experts from '../organisms/Experts'
import Main from '../organisms/Main'

const LandingPage = () => (
  <Layout className={styles.main}>
    <Main />
    <Experts />
    <Corporate />
    <Donation />
  </Layout>
)

export default LandingPage
