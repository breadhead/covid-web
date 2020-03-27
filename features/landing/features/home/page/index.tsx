import Head from 'next/head'
import * as React from 'react'
import * as styles from './Home.css'

import Corporate from '../organisms/Corporate'
import Donation from '../organisms/Donation'
import Experts from '../organisms/Experts'
import { Main } from '../organisms/Main'
import { useAuthModalByUrl } from './useAuthModalByUrl'
import { fetchSuccessefulClosedClaimsAction } from '@app/src/domain/landing/actions/fetchSuccessefulClosedClaimsAction'
import { AppContext } from '@app/lib/server-types'
import Footer, { FooterTheme, FooterType } from '@app/ui/organisms/Footer'
import Header from '@app/features/main/layout/organisms/Header'
import About from '../organisms/Main/components/About'
import Steps from '../organisms/Main/components/Steps'
import { Divider } from '@app/src/ui/divider/Divider'

const LandingPage = () => {
  useAuthModalByUrl()

  return (
    <>
      <Head>
        <title>Справочная служба | Просто спросить</title>
      </Head>
      <Header />
      <Main />
      <div className={styles.backgroundWrapper}>
        <div className={styles.wrapper}>
          <Steps />
        </div>
        <Divider />
        <div className={styles.wrapper}>
          <Corporate />
        </div>
        <Divider />
        <div className={styles.wrapper}>
          <About />
        </div>
        <Divider />
        <div className={styles.wrapper}>
          <Experts />
          <Donation />
        </div>
      </div>
      <Footer type={FooterType.Primary} theme={FooterTheme.Default} />
    </>
  )
}

LandingPage.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(fetchSuccessefulClosedClaimsAction() as any)

  return {}
}

export default LandingPage
