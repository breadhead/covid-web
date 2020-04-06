import * as React from 'react';
import cx from 'classnames';
import { compose } from 'recompose';

import { NavLink } from '@app/src/ui/nav-link';

import s from './SerializerLink.css';

interface SerializerLinkProps {
  children: any[];

  blank: boolean;
  href: string;
  className?: string;
}

const SerializerLinkComponent = ({
  children,
  blank,
  href,

  className,
}: SerializerLinkProps) => {
  const text = typeof children === 'string' ? children : children.join('');

  return (
    <NavLink className={cx(s.link, className)} href={href} blank={blank}>
      {text}
    </NavLink>
  );
};

export const SerializerLink = SerializerLinkComponent;
