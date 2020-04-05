import React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';

import s from './Tag.css';
import { uppercaseFirstLetter } from '../../../../../helpers/uppercaseFirstLetter';

interface TagProps {
  href: string;
  text: string;
  highlighted?: boolean;
}

export const Tag = ({ href, text, highlighted }: TagProps) => {
  return (
    <NavLink
      withoutUnderline
      className={cx(s.tag, highlighted && s.highlighted)}
      href={href}
    >
      {uppercaseFirstLetter(text)}
    </NavLink>
  );
};
