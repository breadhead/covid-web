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
    <SystemLayout>
      <Head>
        <title>Наблюдательный совет | Что делать?</title>
      </Head>
      <div className="gl-wrapper gl-section">
        <h1 className="gl-pageTitle">Наблюдательный совет</h1>
        <ExpertsList href="supervisory" experts={experts} />
      </div>
    </SystemLayout>
  );
};

AllExperts.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(getExpertBoardFromSanity() as any);

  return {};
};

export default AllExperts;
