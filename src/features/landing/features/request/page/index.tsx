import * as React from 'react';
import Head from 'next/head';

import {MainLayout} from '@app/src/features/common/layout';
import {AppContext} from '@app/src/lib/server-types';

import * as styles from './Request.css';
import {Notification} from '../molecules/Notification';
import {RequestForm} from '../organisms/RequestForm';

interface Props {
  id: string;
}

interface Query {
  id: string;
}

class RequstPage extends React.Component<Props> {
  public static getInitialProps({ query }: AppContext<Query>) {
    const { id } = query;

    return { id };
  }

  public render() {
    return (
      <MainLayout className={styles.main}>
        <Head>
          <title>Новое обращение | Просто спросить</title>
        </Head>

        <h1 className={styles.title}>Новое обращение</h1>
        <Notification />
        <RequestForm />
      </MainLayout>
    );
  }
}

export default RequstPage;
