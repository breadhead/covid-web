import * as React from 'react'

import * as styles from './Experts.css'

import Layout from '@app/features/main/layout'
import ExpertsList from './organisms/ExpertsList'

const ExpertsPage = () => (
  <Layout className={styles.main}>
    <h1 className={styles.title}>Наши эксперты</h1>
    <ExpertsList />
  </Layout>
)

export default ExpertsPage
