import * as React from 'react'

import * as styles from './Experts.css'

import Layout from '@app/features/main/layout'
import ExpertCard from './organisms/ExpertCard'

const ExpertsPage = () => (
  <Layout className={styles.main}>
    <h1 className={styles.title}>Наши эксперты</h1>
    <ExpertCard />
  </Layout>
)

export default ExpertsPage
