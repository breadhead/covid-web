import { BecomePartnerForm } from '../BecomePartnerForm'
import * as React from 'react';
import Head from 'next/head';

import { MainLayout } from '@app/features/main/layout';

import * as styles from './BecomePartnerPage.css';

export const BecomePartnerPage = () => {
  return (
    <MainLayout className={styles.main}>
      <Head>
        <title>Предложить помощь | Просто спросить</title>
      </Head>

      <h1 className={styles.title}>Предложить помощь</h1>
      <BecomePartnerForm />
    </MainLayout>
  );
};