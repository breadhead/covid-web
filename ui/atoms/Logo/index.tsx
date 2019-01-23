import IconCustom from '@app/ui/atoms/IconCustom'
import cx from 'classnames'
import * as React from 'react'
import NavLink, { NavLinkType } from '../NavLink'
import styles from './Logo.css'

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => (
  <NavLink className={styles.logo} type={NavLinkType.Nav} href="/">
    <IconCustom
      className={cx(styles.desktopLogo, styles.logo, className)}
      name="logo_full"
    />
    <IconCustom
      className={cx(styles.mobileLogo, styles.logo, className)}
      name="logo_short"
    />
  </NavLink>
)

export default Logo
