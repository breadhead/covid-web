import Head from 'next/head';
import * as React from 'react';

import { AskHeader } from '@app/src/features/common/layout/organisms/Header';
import { Divider } from '@app/src/ui/divider/Divider';
import { SystemLayout } from '@app/src/features/system/layout';

import * as styles from './Home.css';
import Corporate from '../organisms/Corporate';
import Donation from '../organisms/Donation';
import Experts from '../organisms/Experts';
import { Main } from '../organisms/Main';
import { useAuthModalByUrl } from './useAuthModalByUrl';
import About from '../organisms/Main/components/About';
import Steps from '../organisms/Main/components/Steps';
import { PageType } from '../../partners/organisms/PartnersList/config';

const LandingPage = () => {
  useAuthModalByUrl();

  return (
    <>
      <Head>
        <title>Просто спросить | COVID-19</title>
      </Head>
      <SystemLayout>
        <AskHeader />
        <Main />
        <Divider />
        <div className={styles.backgroundWrapper}>
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
            <Donation pageType={PageType.Ask} />
          </div>
        </div>
      </SystemLayout>
    </>
  );
};

export default LandingPage;
