import * as React from 'react';
import Head from 'next/head';

import { SystemLayout } from '@app/src/features/system/layout';

import { HospitalAidForm } from '../../../../system/for-hospitals/components/form/HospitalAidForm';
import * as styles from './HospitalAidPage.css';

export const HospitalAidPage = () => {
  return (
    <SystemLayout className={styles.main}>
      <Head>
        <title>Помощь больницам | Что делать:</title>
      </Head>

      <section className="gl-wrapper gl-section">
        <h1 className={styles.title}>Помощь больницам</h1>
        <HospitalAidForm onSubmit={(data) => Promise.resolve(data)} />
      </section>
    </SystemLayout>
  );
};
