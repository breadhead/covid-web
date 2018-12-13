import cx from 'classnames'
import * as React from 'react'

import Logo from '@app/ui/atoms/Logo'

import Legal from '../components/Legal'
import Login from '../components/Login'
import Menu from '../components/Menu'
import Partners from '../components/Partners'
import * as styles from './PrimaryFooter.css'

const PrimaryFooter = () => (
  <footer className={styles.footer}>
    <div className={cx(styles.top, styles.row)}>
      <Logo className={styles.logo} />
      <Menu long />
      <Login />
    </div>

    <Partners className={styles.row} />
    <Legal className={styles.row} />
  </footer>
)

export default PrimaryFooter
