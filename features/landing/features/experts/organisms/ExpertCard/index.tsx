import * as React from 'react'

import * as styles from './ExpertCard.css'

import NavLink, { NavLinkType } from '@app/ui/atoms/NavLink'

import { ExpertInterface } from '../../features/Expert/page'

interface Props {
  expert: ExpertInterface
}

const ExpertCard = ({ expert }: Props) => {
  const { id, photo, name, specialization } = expert
  return (
    <article className={styles.expertCard}>
      <NavLink type={NavLinkType.Nav} href={`experts/${id}`}>
        <img className={styles.image} src={photo} alt={name} />
      </NavLink>
      <p className={styles.name}>{name}</p>
      <p className={styles.specialization}>{specialization}</p>
    </article>
  )
}

export default ExpertCard