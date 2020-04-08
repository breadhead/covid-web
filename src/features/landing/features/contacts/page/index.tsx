import * as React from 'react';
import Head from 'next/head';

import { SystemLayout } from '@app/src/features/system/layout';

import * as styles from './Contacts.css';
import FeedbackForm from '../organisms/FeedbackForm';
import YandexMap from '../organisms/YandexMap';

export interface Props {
  claimNumber: string;
}

const ContactsPage = ({ claimNumber }: Props) => (
  <SystemLayout>
    <Head>
      <title>Контакты | Просто спросить</title>
    </Head>
    <section className="gl-wrapper gl-section">
      <h1 className={styles.title}>Контакты</h1>
      <div className={styles.mapContainer}>
        <YandexMap />
      </div>
      <FeedbackForm claimNumber={claimNumber} />
    </section>
  </SystemLayout>
);

export default ContactsPage;
