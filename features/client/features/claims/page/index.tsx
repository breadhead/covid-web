import * as React from 'react'

import Layout from '../../../organisms/Layout'
import Claims from '../organisms/Claims'
import Title from '../organisms/Title'

import styles from './Page.css'

const ClaimsPage = () => (
  <Layout className={styles.page}>
    <Title />
    <Claims claims={['dsd', 'add']} />
  </Layout>
)

export default ClaimsPage
