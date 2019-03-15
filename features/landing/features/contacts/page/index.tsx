import * as React from 'react'

import Head from 'next/head'
import * as styles from './Contacts.css'

import Layout from '@app/features/main/layout'
import FeedbackForm from '../organisms/FeedbackForm'
import YandexMap from '../organisms/YandexMap'

export interface Props {
  claimNumber: string
}

const ContactsPage = ({ claimNumber }: Props) => (
  <Layout className={styles.main}>
    <Head>
      <title>Контакты | Просто спросить</title>
    </Head>
    <h1 className={styles.title}>Контакты</h1>
    <div className={styles.mapContainer}>
      <YandexMap />
    </div>
    <FeedbackForm claimNumber={claimNumber} />
  </Layout>
)

export default ContactsPage
