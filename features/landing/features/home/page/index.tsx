import Head from 'next/head';
import * as React from 'react';

import Footer, {
  FooterTheme,
  FooterType,
} from './node_modules/@app/ui/organisms/Footer';
import Header from './node_modules/@app/features/common/layout/organisms/Header';
import { Divider } from './node_modules/@app/ui/divider/Divider';
import { AppContext } from './node_modules/@app/src/lib/server-types';
import { getPartnersFromSanity } from './node_modules/@app/features/common/partnerReducer';
import { getExpertsFromSanity } from './node_modules/@app/features/common/expertReducer';
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
  );
};

LandingPage.getInitialProps = async (context: AppContext) => {
  await Promise.all([
    context.reduxStore.dispatch(getPartnersFromSanity() as any),
    context.reduxStore.dispatch(getExpertsFromSanity() as any),
  ]);

  return {};
};

export default LandingPage;
