import * as React from 'react';
import Head from 'next/head';

import { AppContext } from '@app/src/lib/server-types';
import { getPartnersFromSanity } from '@app/src/domain/reducers/partnerReducer';
import { SystemLayout } from '@app/src/features/system/layout';

import * as styles from './Partners.css';
import { Notification } from '../molecules/Notification';
import { PartnersPageList } from '../organisms/PartnersList';
import { PartnersType } from '../organisms/PartnersList/config';

interface Props {
  id: string;
}

interface Query {
  id: string;
}

class PartnersPage extends React.Component<Props> {
  public static async getInitialProps({
    query,
    reduxStore,
  }: AppContext<Query>) {
    const { id } = query;

    await reduxStore.dispatch(getPartnersFromSanity() as any);

    return { id };
  }

  public render() {
    return (
      <SystemLayout>
        <Head>
          <title>Партнёры | Что делать:</title>
        </Head>
        <section className="gl-wrapper gl-section">
          <h1 className={styles.title}>Партнёры</h1>
          <Notification />
          <PartnersPageList type={this.props.id as PartnersType} />
        </section>
      </SystemLayout>
    );
  }
}

export default PartnersPage;
