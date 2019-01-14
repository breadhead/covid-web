import * as React from 'react'

import * as styles from './Contacts.css'

import Layout from '@app/features/main/layout'
import YandexMap from '../organisms/YandexMap'

const ContactsPage = () => (
  <Layout className={styles.main}>
    <h1 className={styles.title}>Контакты</h1>
    <YandexMap />
    ФОРМА
  </Layout>
)

export default ContactsPage
