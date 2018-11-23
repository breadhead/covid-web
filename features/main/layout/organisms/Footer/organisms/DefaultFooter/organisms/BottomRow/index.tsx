import cx from 'classnames'
import * as React from 'react'
import * as styles from './BottomRow.css'

import NavLink from '@app/ui/atoms/NavLink'

interface Props {
  className?: string
}

const BottomRow = ({ className }: Props) =>
  <div className={cx(styles.bottom, className)}>
    <div className={styles.oncohelp}>
      <span className={styles.copyright}>© Просто спросить, 2018</span>
      <NavLink className={styles.infoLink} type="nav">Пользовательское соглашение</NavLink>
    </div>
    <span className={styles.breadhead}>
      <span className={styles.secondaryText}>Сайт сделан в </span>
      <NavLink className={styles.infoLink} type="nav">Breadhead</NavLink>
    </span>
  </div>

export default BottomRow
