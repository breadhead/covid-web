import IconCustom from '@app/ui/IconCustom'
import cx from 'classnames'
import * as React from 'react'
import NavLink, { NavLinkType } from '../NavLink'
import styles from './Logo.css'

interface Props {
  className?: string
  wrapperClassName?: string
}

const Logo = ({ className, wrapperClassName }: Props) => (
  <NavLink
    className={cx(styles.logo, wrapperClassName)}
    type={NavLinkType.Nav}
    href="/"
  >
    <IconCustom className={cx(styles.logo, className)} name="logo_full" />
  </NavLink>
)

export default Logo
