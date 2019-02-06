import Head from 'next/head'
import * as React from 'react'
import * as styles from './Home.css'

import Layout from '@app/features/main/layout'
import Corporate from '../organisms/Corporate'
import Donation from '../organisms/Donation'
import Experts from '../organisms/Experts'
import Main from '../organisms/Main'
import { useAuthModalByUrl } from './useAuthModalByUrl'

const LandingPage = () => {
  useAuthModalByUrl()

  return (
    <Layout className={styles.main}>
      <Head>
        <title>Справочная служба | Просто спросить</title>
      </Head>
      <Main />
      <Experts />
      <Corporate />
      <Donation />
    </Layout>
  )
}

export default LandingPage
