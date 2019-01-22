import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import styles from './NavLink.css'

export enum TargetType {
  Default = '',
  Blank = '_blank',
}

export enum NavLinkType {
  Link = 'Link',
  Nav = 'Nav',
}
interface Props {
  children: React.ReactNode | string
  type?: NavLinkType
  className?: string
  href: string
  target?: TargetType
}

const NavLink = ({
  children,
  className,
  href,
  type = NavLinkType.Link,
  target = TargetType.Default,
  ...rest
}: Props) => (
  <NextLink href={href} {...rest}>
    <a target={target} className={cx(styles[type], styles.NavLink, className)}>
      {children}
    </a>
  </NextLink>
)

export default NavLink
