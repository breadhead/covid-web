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
  width?: number;
  linkClassName?: string;
}

export const LinksList = ({
  children,
  styles,
  className,
  asPath,
  narrow,
  width,
  linkClassName,
}: LinksListProps) => {
  const getText = (link: any) => {
    if (!link.narrowText) {
      return link.text;
    }
    console.log('width:', width);
    return !!width && width <= LARGE_SECOND_DOWN ? link.narrowText : link.text;
  };
  return (
    <div className={cx(className, narrow && styles.narrowMenu)}>
      {children.map((link) => (
        <NavLink
          key={link.href}
          withoutUnderline
          href={link.href}
          className={cx(linkClassName, asPath === link.href && styles.active)}
        >
          {getText(link)}
        </NavLink>
      ))}
    </div>
  );
};
