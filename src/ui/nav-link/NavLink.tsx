import cx from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import styles from './NavLink.css'
import { NavLinkProps } from './NavLinkProps'

export const NavLink = ({
  children,
  className,
  href,
  blank = false,
  withoutUnderline = false,
}: NavLinkProps) => {
  if (blank) {
    return (
      <a
        href={href}
        className={cx(
          styles.navlink,
          withoutUnderline ? styles.nav : styles.link,
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
          withoutUnderline ? styles.nav : styles.link,
          className,
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
