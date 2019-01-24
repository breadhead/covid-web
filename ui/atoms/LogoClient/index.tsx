import IconCustom from '@app/ui/atoms/IconCustom'
import cx from 'classnames'
import * as React from 'react'
import NavLink, { NavLinkType } from '../NavLink'
import styles from './Logo.css'

interface Props {
  className?: string
}

const LogoClient = ({ className }: Props) => (
  <NavLink className={styles.logoWrapper} type={NavLinkType.Nav} href="/">
    <IconCustom className={cx(styles.logo, className)} name="logo_short" />
  </NavLink>
)

export default LogoClient
