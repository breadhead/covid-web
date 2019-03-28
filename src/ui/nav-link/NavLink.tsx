import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import { getTypeClassName } from './helpers/getTypeClassName'
import styles from './NavLink.css'
import { NavLinkProps } from './NavLinkProps'
import { NavLinkTargetType } from './NavLinkTargetType'
import { NavLinkType } from './NavLinkType'

export const NavLink = ({
  children,
  className,
  href,
  type = NavLinkType.Link,
  target = NavLinkTargetType.Default,
}: NavLinkProps) => (
  <NextLink href={href}>
    <a
      target={target}
      className={cx(styles.navlink, styles[getTypeClassName(type)], className)}
    >
      {children}
    </a>
  </NextLink>
)
