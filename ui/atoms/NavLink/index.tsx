import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import styles from './NavLink.css'

interface Props {
  children: React.ReactNode
  className?: string
  href?: string
}

const NavLink = ({ children, className, href }: Props) =>
  <NextLink href={href}>
    <a className={cx(styles.NavLink, className)}>{children}</a>
  </NextLink>

export default NavLink
