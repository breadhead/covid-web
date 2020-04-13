import cx from 'classnames';
import * as React from 'react';

import { stripUrl } from '@app/src/helpers/stripUrl';
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
      {formatUrlsIfNeeded(text)}
    </NavLink>
  );
};

const formatUrlsIfNeeded = (url: string) => {
  if (url.includes('http') && url.length > 15) {
    return stripUrl(url);
  }

  return url;
};

export const SerializerLink = SerializerLinkComponent;
