import Head from 'next/head';
import * as React from 'react';
import {useMappedState} from 'redux-react-hook';

import {MainLayout} from '@app/src/features/common/layout';
import {selectExperts} from '@app/src/domain/reducers/expertReducer/selectExperts';

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

export default AllExperts;
