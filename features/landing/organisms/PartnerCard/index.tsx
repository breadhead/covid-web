import * as React from 'react'

import * as styles from './PartnerCard.css'

import cx from 'classnames'

import { NON_BREAKING_SPACE } from '@app/lib/config'

export interface PartnerCardInterface {
  img: string
  label: string
  sum?: string
  description?: string
}

interface Props {
  card: PartnerCardInterface
  className?: string
}

const PartnerCard = ({ card, className }: Props) => {
  const { img, label, sum, description: carddDescription } = card
  return (
    <article className={cx(styles.card, className)}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={img} alt={label} />
      </div>
      <p className={styles.label}>{label}</p>
      <p className={styles.description}>{carddDescription}</p>
      {!!sum && (
        <p className={styles.sum}>
          {sum}
          {NON_BREAKING_SPACE}₽
        </p>
      )}
    </article>
  )
}

export default PartnerCard
