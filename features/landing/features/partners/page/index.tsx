import * as React from 'react'

import * as styles from './Partners.css'

import Layout from '@app/features/main/layout'

import Notification from '../molecules/Notification'
import PartnersList from '../organisms/PartnersList'

const PartnersPage = () => (
  <Layout className={styles.main}>
    <h1 className={styles.title}>Партнёры</h1>
    <Notification />
    <PartnersList />
  </Layout>
)

export default PartnersPage
