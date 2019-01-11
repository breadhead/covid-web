import * as React from 'react'

import * as styles from './PartnerCard.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
export interface PartnerCard {
  img: string
  label: string
  sum: string
}

interface Props {
  card: PartnerCard
}

const PartnerCard = ({ card }: Props) => {
  const { img, label, sum } = card
  return (
    <article className={styles.card}>
      <img className={styles.logo} src={img} alt={label} />
      <p className={styles.label}>{label}</p>
      <p className={styles.sum}>
        {sum}
        {NON_BREAKING_SPACE} ₽
      </p>
    </article>
  )
}

export default PartnerCard
