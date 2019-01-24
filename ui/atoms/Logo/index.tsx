import IconCustom from '@app/ui/atoms/IconCustom'
import cx from 'classnames'
import * as React from 'react'
import NavLink, { NavLinkType } from '../NavLink'
import styles from './Logo.css'

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => (
  <NavLink
    className={cx(styles.logo, className)}
    type={NavLinkType.Nav}
    href="/"
  >
    <IconCustom className={cx(styles.logo, className)} name="logo_full" />
  </NavLink>
)

export default Logo
