import cx from 'classnames';
import NextLink from 'next/link';
import * as React from 'react';
import qs from 'query-string';
import { isEmpty, isObject } from 'lodash';

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
    return typeof href === 'string' ? (
      <a
        href={href}
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
    ) : null;
  }
  const realHref = isObject(href) ? objectUrlToString(href as any) : href;
  return (
    <routes.Link route={realHref as any}>
      <a
        className={cx(
          styles.navlink,
          styles[getLinkStyle(withoutUnderline)],
          className,
        )}
      >
        {children}
      </a>
    </routes.Link>
  );
};

const objectUrlToString = ({ pathname, query }) => {
  const queryString = isEmpty(query) ? '' : '?' + qs.stringify(query);

  return pathname + queryString;
};
