import Head from 'next/head';
import * as React from 'react';

import Header from '@app/src/features/common/layout/organisms/Header';
import { Divider } from '@app/src/ui/divider/Divider';
import { AppContext } from '@app/src/lib/server-types';
import { SystemHeader } from '@app/src/features/system/layout/components/header';
import { SystemFooter } from '@app/src/features/system/layout/components/footer';

import * as styles from './Home.css';
import Corporate from '../organisms/Corporate';
import Donation from '../organisms/Donation';
import Experts from '../organisms/Experts';
import { Main } from '../organisms/Main';
import { useAuthModalByUrl } from './useAuthModalByUrl';
import About from '../organisms/Main/components/About';
import Steps from '../organisms/Main/components/Steps';

const LandingPage = () => {
  useAuthModalByUrl();

  return (
    <>
      <Head>
        <title>Просто спросить | COVID-19</title>
      </Head>
      <SystemHeader />
      <Header />
      <Main />
      <Divider />
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
      <SystemFooter />
      {/* <Footer type={FooterType.Primary} theme={FooterTheme.Default} /> */}
    </>
  );
};

export default LandingPage;
