import * as React from 'react';
import Head from 'next/head';

import { MainLayout } from '@app/features/main/layout';

import { VolunteerForm } from '../VolunteerForm';
import * as styles from './VolunteerPage.css';

export const VolunteerPage = () => {
  return (
    <MainLayout className={styles.main}>
      <Head>
        <title>Стать волонтером | Просто спросить</title>
      </Head>

      <h1 className={styles.title}>Стать волонтёром</h1>
      <VolunteerForm />
    </MainLayout>
  );
};
