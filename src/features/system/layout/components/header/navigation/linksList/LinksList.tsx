import React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';
import { LARGE_SECOND_DOWN } from '@app/src/helpers/mediaQueries';

interface LinksListProps {
  children: any[];
  styles: any;
  className: string;
  asPath: string;
  narrow?: boolean;
  linkClassName?: string;
}

export const LinksList = ({
  children,
  styles,
  className,
  asPath,
  narrow,
  linkClassName,
}: LinksListProps) => {
  return (
    <div className={cx(className, narrow && styles.narrowMenu)}>
      {children.map((link) => (
        <NavLink
          key={link.href}
          withoutUnderline
          href={link.href}
          className={cx(linkClassName, asPath === link.href && styles.active)}
        >
          <span className={styles.textWide}>{link.text}</span>
          <span className={styles.textNarrow}>{link.narrowText}</span>
        </NavLink>
      ))}
    </div>
  );
};
