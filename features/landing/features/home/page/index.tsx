import Head from 'next/head'
import * as React from 'react'
import * as styles from './Home.css'

import Corporate from '../organisms/Corporate'
import Donation from '../organisms/Donation'
import Experts from '../organisms/Experts'
import { Main } from '../organisms/Main'
import { useAuthModalByUrl } from './useAuthModalByUrl'
import Footer, { FooterTheme, FooterType } from '@app/ui/organisms/Footer'
import Header from '@app/features/main/layout/organisms/Header'
import About from '../organisms/Main/components/About'
import Steps from '../organisms/Main/components/Steps'
import { Divider } from '@app/src/ui/divider/Divider'
import { AppContext } from '@app/lib/server-types'
import { getPartnersFromSanity } from '@app/features/common/partnerReducer'

const LandingPage = () => {
  useAuthModalByUrl()

  return (
    <>
      <Head>
        <title>Просто спросить | COVID-19</title>
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
  await context.reduxStore.dispatch(getPartnersFromSanity() as any)

  return {}
}

export default LandingPage
