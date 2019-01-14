import * as React from 'react'

import * as styles from './PartnerCard.css'

import cx from 'classnames'

import { NON_BREAKING_SPACE } from '@app/lib/config'
export interface PartnerCardInterface {
  img: string
  label: string
  sum: string
}

interface Props {
  card: PartnerCardInterface
  className?: string
}

const PartnerCard = ({ card, className }: Props) => {
  const { img, label, sum } = card
  return (
    <article className={cx(styles.card, className)}>
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
