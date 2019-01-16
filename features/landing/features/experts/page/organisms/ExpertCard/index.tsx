import * as React from 'react'

import * as styles from './ExpertCard.css'

interface Expert {
  photo: string
  name: string
  specialization: string
}

interface Props {
  expert: Expert
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
