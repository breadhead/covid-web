import * as React from 'react'

import * as styles from './ExpertCard.css'

import { NavLink } from '@front/ui/nav-link'

import { ExpertInterface } from '../../features/Expert/page'

interface Props {
  expert: ExpertInterface
}

const ExpertCard = ({ expert }: Props) => {
  const { id, photo, name, specialization } = expert
  return (
    <article className={styles.expertCard}>
      <NavLink className={styles.link} withoutUnderline href={`/experts/${id}`}>
        <img className={styles.image} src={photo} alt={name} />
        <p className={styles.name}>{name}</p>
        <p className={styles.specialization}>{specialization}</p>
      </NavLink>
    </article>
  )
}

export default ExpertCard
