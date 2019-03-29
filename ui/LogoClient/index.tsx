import { Icon } from '@front/ui/icon'
import { NavLink } from '@front/ui/nav-link'
import cx from 'classnames'
import * as React from 'react'
import styles from './Logo.css'

interface Props {
  className?: string
}

const LogoClient = ({ className }: Props) => (
  <NavLink className={styles.logoWrapper} withoutUnderline href="/">
    <Icon className={cx(styles.logo, className)} name="logo_short" />
  </NavLink>
)

export default LogoClient
