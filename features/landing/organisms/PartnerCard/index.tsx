import * as React from 'react'

import * as styles from './PartnerCard.css'

import cx from 'classnames'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { NavLink } from '@app/src/ui/nav-link'

export interface PartnerCardInterface {
  img: string
  label: string
  link: string
  sum?: string
  description?: string
}

interface Props {
  card: PartnerCardInterface
  className?: string
}

const PartnerCard = ({ card, className }: Props) => {
  const { img, label, sum, description: carddDescription, link } = card
  return (
    <NavLink blank withoutUnderline href={link} className={cx(styles.card, className)}>
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
    </NavLink>

  )
}

export default PartnerCard
