import * as React from 'react';
import Head from 'next/head';

import { MainLayout } from '@app/features/main/layout';
import { AppContext } from '@app/lib/server-types';
import { getPartnersFromSanity } from '@app/features/common/partnerReducer';
import LandingPage from '@app/features/landing/features/home';

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
  public static getInitialProps({ query }: AppContext<Query>) {
    const { id } = query;

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

LandingPage.getInitialProps = async (context: AppContext) => {
  await context.reduxStore.dispatch(getPartnersFromSanity() as any);

  return {};
};

export default PartnersPage;
