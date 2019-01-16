import * as React from 'react'

import * as styles from './ExpertsList.css'

import { experts } from '../../../config'

import ExpertCard from '../ExpertCard'

const ExpertsList = () => (
  <section className={styles.expertsList}>
    {experts.map(expert => (
      <ExpertCard key={expert.id} expert={expert} />
    ))}
  </section>
)

export default ExpertsList
