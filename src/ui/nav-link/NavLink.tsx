import cx from 'classnames';
import NextLink from 'next/link';
import * as React from 'react';

import routes from '../../../routes';
import { getLinkStyle } from './helpers/getLinkStyle';
import styles from './NavLink.css';
import { NavLinkProps } from './NavLinkProps';

export const NavLink = ({
  children,
  className,
  href,
  as,
  blank = false,
  withoutUnderline = false,
}: NavLinkProps) => {
  if (blank) {
    return (
      <a
        href="/"
        // href={href}
        className={cx(
          styles.navlink,
          styles[getLinkStyle(withoutUnderline)],
          className,
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} as={as || href}>
      <a
        className={cx(
          styles.navlink,
          styles[getLinkStyle(withoutUnderline)],
          className,
        )}
      >
        {children}
      </a>
    </NextLink>
  );
};
