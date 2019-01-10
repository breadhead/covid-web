import * as React from 'react'
import styles from './Badge.css'
import ModalOpener from './ModalOpener'

export interface BadgeProps {}

const Badge: React.SFC<BadgeProps> = () => {
  return (
    <div className={styles.badge}>
      <ModalOpener />
    </div>
  )
}

export default Badge
