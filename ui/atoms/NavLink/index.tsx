import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import styles from './NavLink.css'

export enum NavLinkType {
  Link = 'Link',
  Nav = 'Nav',
}
interface Props {
  children: React.ReactNode | string
  type?: NavLinkType
  className?: string
  href?: string
}

const NavLink = ({ children, className, href, type = NavLinkType.Link }: Props) => {

  const getClassName = (linkType: string) => {
    switch (linkType) {
    case NavLinkType.Link:
      return styles.Link
    case NavLinkType.Nav:
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
