import * as React from 'react';
import Head from 'next/head';

import { AppContext } from '@app/src/lib/server-types';
import { SystemLayout } from '@app/src/features/system/layout';
import Header from '@app/src/features/common/header';
import { AskHeader } from '@app/src/features/common/layout/organisms/Header';

import * as styles from './Request.css';
import { Notification } from '../molecules/Notification';
import { RequestForm } from '../organisms/RequestForm';

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
      <SystemLayout>
        <AskHeader />
        <Head>
          <title>Новое обращение | Просто спросить</title>
        </Head>
        <section className="gl-wrapper gl-section">
          <h1 className={styles.title}>Новое обращение</h1>
          <Notification />
          <RequestForm />
        </section>
      </SystemLayout>
    );
  }
}

export default RequstPage;
