import * as React from 'react'

import * as styles from './ExpertsList.css'

import ExpertCard from '../ExpertCard'

import { experts } from '../../config'

const ExpertsList = () => (
  <section className={styles.expertsList}>
    {experts.map(expert => (
      <ExpertCard key={expert.id} expert={expert} />
    ))}
  </section>
)

export default ExpertsList
