import * as React from 'react';
import Head from 'next/head';

import { MainLayout } from '@app/src/features/common/layout';
import { AppContext } from '@app/src/lib/server-types';
import { getPartnersFromSanity } from '@app/src/features/common/partnerReducer';
import LandingPage from '@app/src/features/landing/features/home';

import * as styles from './Partners.css';
import Notification from '../molecules/Notification';
import PartnersList from '../organisms/PartnersList';

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
      <MainLayout className={styles.main}>
        <Head>
          <title>Партнёры | Просто спросить</title>
        </Head>
        <h1 className={styles.title}>Партнёры</h1>
        <Notification />
        <PartnersList type={this.props.id} />
      </MainLayout>
    );
  }
}

export default PartnersPage;
