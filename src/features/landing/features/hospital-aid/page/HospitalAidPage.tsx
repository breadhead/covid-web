import * as React from 'react';
import Head from 'next/head';

import { MainLayout } from '@app/src/features/common/layout';

import { HospitalAidForm } from '../../../../system/for-clinics/components/form/HospitalAidForm';
import * as styles from './HospitalAidPage.css';

export const HospitalAidPage = () => {
  return (
    <MainLayout className={styles.main}>
      <Head>
        <title>Помощь больницам | Просто спросить</title>
      </Head>

      <h1 className={styles.title}>Помощь больницам</h1>
      <HospitalAidForm onSubmit={(data) => Promise.resolve(data)} />
    </MainLayout>
  );
};
