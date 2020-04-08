import React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';

import s from './Tag.css';
import { uppercaseFirstLetter } from '../../helpers/uppercaseFirstLetter';

interface TagProps {
  href: string;
  text: string;
  highlighted?: boolean;
  big?: boolean;
}

export const Tag = ({ href, text, highlighted, big }: TagProps) => {
  return (
    <NavLink
      withoutUnderline
      className={cx(s.tag, big && s.big, highlighted && s.highlighted)}
      href={href}
    >
      {uppercaseFirstLetter(text)}
    </NavLink>
  );
};
