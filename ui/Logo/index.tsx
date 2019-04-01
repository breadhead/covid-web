import { IconsList } from '@app/src/ui/sprite/IconsList'
import { Icon } from '@front/ui/icon'
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
    <Icon className={cx(styles.logo, className)} name={IconsList.LogoFull} />
  </NavLink>
)

export default Logo
