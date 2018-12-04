import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import styles from './NavLink.css'

export enum Type {
  link = 'link',
  nav = 'nav',
}
interface Props {
  children: React.ReactNode | string
  type?: Type
  className?: string
  href?: string
}

const NavLink = ({ children, className, href, type = Type.link }: Props) => {

  const getClassName = (linkType: string) => {
    switch (linkType) {
    case Type.link:
      return styles.Link
    case Type.nav:
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
