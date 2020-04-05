import React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';

import s from './Tag.css';

interface TagProps {
  href: string;
  text: string;
  highlighted?: boolean;
}

export const Tag = ({ href, text, highlighted }: TagProps) => {
  return (
    <NavLink className={cx(s.tag, highlighted && s.highlighted)} href={href}>
      {text}
    </NavLink>
  );
};
