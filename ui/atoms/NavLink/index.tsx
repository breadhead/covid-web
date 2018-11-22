import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import styles from './NavLink.css'

interface Props {
  children: React.ReactNode
  type?: 'link' | 'nav'
  className?: string
  href?: string
}

const NavLink = ({ children, className, href, type = 'link' }: Props) => {

  const getClassName = (linkType: string) => {
    switch (linkType) {
    case 'link':
      return styles.Link
    case 'nav':
      return styles.Nav
    default:
      return null
    }
  }
  return <NextLink href={href}>
    <a className={cx(getClassName(type), styles.NavLink, className)}>{children}</a>
  </NextLink>
}

export default NavLink
