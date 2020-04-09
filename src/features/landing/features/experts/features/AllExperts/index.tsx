import Head from 'next/head';
import * as React from 'react';
import { useMappedState } from 'redux-react-hook';

import { AppContext } from '@app/src/lib/server-types';
import { getExpertsFromSanity } from '@app/src/domain/reducers/expertReducer';
import { selectExperts } from '@app/src/domain/reducers/expertReducer/selectExperts';
import { SystemLayout } from '@app/src/features/system/layout';

import * as styles from './AllExperts.css';
import ExpertsList from '../../organisms/ExpertsList';

const AllExperts = () => {
  const experts = useMappedState(selectExperts);

  return (
    <>
      <Head>
        <title>Эксперты | Просто спросить</title>
      </Head>
      <SystemLayout>
        <section className="gl-wrapper gl-section">
          <h1 className={styles.title}>Наши эксперты</h1>
          <ExpertsList experts={experts} />
        </section>
      </SystemLayout>
    </>
  );
};

export default AllExperts;
