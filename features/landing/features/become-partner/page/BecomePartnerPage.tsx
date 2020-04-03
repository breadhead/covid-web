import * as React from 'react';
import Head from 'next/head';

import { MainLayout } from '@app/features/main/layout';
import { AppContext } from '@app/lib/server-types';

import { BecomePartnerForm } from '../BecomePartnerForm';
import * as styles from './BecomePartnerPage.css';

interface Query {
  theme: string;
}

interface Props {
  theme: string;
}

const BecomePartnerPage = ({ theme }: Props) => {
  return (
    <MainLayout className={styles.main}>
      <Head>
        <title>Предложить помощь | Просто спросить</title>
      </Head>

      <h1 className={styles.title}>Предложить помощь</h1>
      <BecomePartnerForm theme={theme} />
    </MainLayout>
  );
};

BecomePartnerPage.getInitialProps = ({ query }: AppContext<Query>) => {
  const { theme } = query;

  return { theme };
};

export { BecomePartnerPage };
