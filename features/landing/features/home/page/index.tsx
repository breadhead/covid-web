import Head from 'next/head'
import * as React from 'react'
import * as styles from './Home.css'

import Layout from '@app/features/main/layout'
import Corporate from '../organisms/Corporate'
import Donation from '../organisms/Donation'
import Experts from '../organisms/Experts'
import Main from '../organisms/Main'
import { useAuthModalByUrl } from './useAuthModalByUrl'
import { fetchSuccessefulClosedClaimsAction } from '@app/src/domain/landing/actions/fetchSuccessefulClosedClaimsAction'
import { AppContext } from '@app/lib/server-types'

interface Query {
  count: number
}

interface Props {
  count: number
}

const LandingPage = ({ count }: Props) => {
  useAuthModalByUrl()

  return (
    <Layout className={styles.main}>
      <Head>
        <title>Справочная служба | Просто спросить</title>
      </Head>
      <Main />
      <Experts />
      <Corporate count={count} />
      <Donation />
    </Layout>
  )
}

LandingPage.getInitialProps = async (context: AppContext<Query>) => {
  const count = await context.reduxStore.dispatch(
    fetchSuccessefulClosedClaimsAction() as any,
  )
  return { count: count.payload[0] }
}

export default LandingPage
