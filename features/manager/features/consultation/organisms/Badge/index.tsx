import * as React from 'react'
import styles from './Badge.css'
import ModalOpener from './ModalOpener'

const Badge: React.SFC<{}> = () => {
  return (
    <div className={styles.badge}>
      <ModalOpener />
    </div>
  )
}

export default Badge
