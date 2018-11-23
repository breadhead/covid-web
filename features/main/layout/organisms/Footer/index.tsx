import cx from 'classnames'
import * as React from 'react'
import * as styles from './Footer.css'

import NavLink from '@app/ui/atoms/NavLink'
import Partners from './organisms/Partners'
import TopRow from './organisms/TopRow'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TopRow className={styles.row} />
      <div className={cx(styles.row, styles.middle)}>
        <Partners />
      </div>
      <div className={cx(styles.row, styles.bottom)}>
        <div className={styles.oncohelp}>
          <span className={styles.copyright}>© Просто спросить, 2018</span>
          <NavLink className={styles.infoLink} type="nav">Пользовательское соглашение</NavLink>
        </div>
        <span className={styles.breadhead}>
          <span className={styles.secondaryText}>Сайт сделан в </span>
          <NavLink className={styles.infoLink} type="nav">Breadhead</NavLink>
        </span>
      </div>
    </footer>
  )
}

export default Footer
