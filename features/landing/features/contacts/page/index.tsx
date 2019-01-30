import * as React from 'react'

import Head from 'next/head'
import * as styles from './Contacts.css'

import Layout from '@app/features/main/layout'
import FeedbackForm from '../organisms/FeedbackForm'
import YandexMap from '../organisms/YandexMap'

const ContactsPage = () => (
  <Layout className={styles.main}>
    <Head>
      <title>Контакты | Просто спросить</title>
    </Head>
    <h1 className={styles.title}>Контакты</h1>
    <YandexMap />
    <FeedbackForm />
  </Layout>
)

export default ContactsPage
