import * as React from 'react'
import { shuffle } from 'lodash'

import * as styles from './ExpertsList.css'

import ExpertCard from '../ExpertCard'

import { experts } from '../../config'

const ExpertsList = () => {
  const shuffledExperts = shuffle(experts).slice(0, 8)
  return (
    <section className={styles.expertsList}>
      {shuffledExperts.map(expert => (
        <ExpertCard key={expert.id} expert={expert} />
      ))}
    </section>
  )
}

export default ExpertsList
