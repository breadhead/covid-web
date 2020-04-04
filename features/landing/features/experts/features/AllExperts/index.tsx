import Head from 'next/head';
import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { MainLayout } from '@app/features/main/layout';
import { selectExperts } from '@app/features/common/expertReducer/selectPartners';
import { AppContext } from '@app/lib/server-types';
import { getPartnersFromSanity } from '@app/features/common/partnerReducer';
import { getExpertsFromSanity } from '@app/features/common/expertReducer';

import * as styles from './AllExperts.css';
import ExpertsList from '../../organisms/ExpertsList';

const AllExperts = () => {
  const experts = useMappedState(selectExperts);

  return (
    <MainLayout className={styles.main}>
      <Head>
        <title>Эксперты | Просто спросить</title>
      </Head>
      <h1 className={styles.title}>Наши эксперты</h1>
      <ExpertsList experts={experts} />
    </MainLayout>
  );
};

AllExperts.getInitialProps = async (context: AppContext) => {
  await Promise.all([
    context.reduxStore.dispatch(getPartnersFromSanity() as any),
    context.reduxStore.dispatch(getExpertsFromSanity() as any),
  ]);

  return {};
};

export default AllExperts;
