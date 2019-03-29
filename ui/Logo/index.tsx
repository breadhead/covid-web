import IconCustom from '@app/ui/IconCustom'
import { NavLink } from '@front/ui/nav-link'
import cx from 'classnames'
import * as React from 'react'
import styles from './Logo.css'

interface Props {
  className?: string
  wrapperClassName?: string
}

const Logo = ({ className, wrapperClassName }: Props) => (
  <NavLink
    className={cx(styles.logo, wrapperClassName)}
    withoutUnderline
    href="/"
  >
    <IconCustom className={cx(styles.logo, className)} name="logo_full" />
  </NavLink>
)

export default Logo
