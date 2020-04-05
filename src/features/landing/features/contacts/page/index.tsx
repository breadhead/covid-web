import * as React from 'react';
import Head from 'next/head';

import {MainLayout} from '@app/src/features/common/layout';

import * as styles from './Contacts.css';
import FeedbackForm from '../organisms/FeedbackForm';
import YandexMap from '../organisms/YandexMap';

export interface Props {
  claimNumber: string;
}

const ContactsPage = ({ claimNumber }: Props) => (
  <MainLayout className={styles.main}>
    <Head>
      <title>Контакты | Просто спросить</title>
    </Head>
    <h1 className={styles.title}>Контакты</h1>
    <div className={styles.mapContainer}>
      <YandexMap />
    </div>
    <FeedbackForm claimNumber={claimNumber} />
  </MainLayout>
);

export default ContactsPage;
