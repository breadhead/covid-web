import Head from 'next/head'
import * as React from 'react'
import * as styles from './AllExperts.css'

import { MainLayout } from '@app/features/main/layout'
import ExpertsList from '../../organisms/ExpertsList'

const AllExperts = () => (
  <MainLayout className={styles.main}>
    <Head>
      <title>Эксперты | Просто спросить</title>
    </Head>
    <h1 className={styles.title}>Наши эксперты</h1>
    <ExpertsList />
  </MainLayout>
)

export default AllExperts
