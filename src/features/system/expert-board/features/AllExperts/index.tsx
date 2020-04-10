import Head from 'next/head';
import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { SystemLayout } from '@app/src/features/system/layout';
import { AppContext } from '@app/src/lib/server-types';
import { getExpertBoardFromSanity } from '@app/src/domain/reducers/expertBoardReducer';

import { selectExpertBoard } from '@front/domain/reducers/expertBoardReducer/selectExperts';

import * as styles from './AllExperts.css';
import ExpertsList from '../../organisms/ExpertsList';

const AllExperts = () => {
  const experts = useMappedState(selectExpertBoard);

  return (
    <SystemLayout className={styles.main}>
      <Head>
        <title>Наблюдательный совет | Просто спросить</title>
      </Head>
      <h1 className={styles.title}>Наблюдательный совет</h1>
      <ExpertsList href="supervisory" experts={experts} />
    </SystemLayout>
  );
};

AllExperts.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(getExpertBoardFromSanity() as any);

  return {};
};

export default AllExperts;
