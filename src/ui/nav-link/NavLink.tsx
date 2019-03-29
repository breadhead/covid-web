import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import { getTypeClassName } from './helpers/getTypeClassName'
import styles from './NavLink.css'
import { NavLinkProps } from './NavLinkProps'
import { NavLinkType } from './NavLinkType'

export const NavLink = ({
  children,
  className,
  href,
  type,
  blank = false,
}: NavLinkProps) => {
  if (blank) {
    return (
      <a
        href={href}
        className={cx(
          styles.navlink,
          styles[getTypeClassName(type)],
          className,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a
        className={cx(
          styles.navlink,
          styles[getTypeClassName(type || NavLinkType.WithUnderline)],
          className,
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
