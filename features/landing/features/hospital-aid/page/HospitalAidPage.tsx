import { HospitalAidForm } from '../HospitalAidForm';
import * as React from 'react';
import Head from 'next/head';

import { MainLayout } from '@app/features/main/layout';

import * as styles from './HospitalAidPage.css';

export const HospitalAidPage = () => {
  return (
    <MainLayout className={styles.main}>
      <Head>
        <title>Стать волонтером | Просто спросить</title>
      </Head>

      <h1 className={styles.title}>Стать волонтёром</h1>
      <HospitalAidForm />
    </MainLayout>
  );
};