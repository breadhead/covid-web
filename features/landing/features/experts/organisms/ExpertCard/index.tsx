import * as React from 'react'

import * as styles from './ExpertCard.css'

import { ExpertInterface } from '../../features/Expert/page'

interface Props {
  expert: ExpertInterface
}

const ExpertCard = ({ expert }: Props) => {
  const { photo, name, specialization } = expert
  return (
    <article className={styles.expertCard}>
      <img className={styles.image} src={photo} alt={name} />
      <p className={styles.name}>{name}</p>
      <p className={styles.specialization}>{specialization}</p>
    </article>
  )
}

export default ExpertCard
