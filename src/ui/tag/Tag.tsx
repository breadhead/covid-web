import React from 'react';
import cx from 'classnames';

import { NavLink } from '@app/src/ui/nav-link';

import s from './Tag.css';
import { uppercaseFirstLetter } from '../../helpers/uppercaseFirstLetter';

interface TagProps {
  href: string | object;
  text: string;
  highlighted?: boolean;
  big?: boolean;
  huge?: boolean;
  active?: boolean;
}

export const Tag = ({
  href,
  text,
  highlighted,
  big,
  huge,
  active,
}: TagProps) => {
  return (
    <NavLink
      withoutUnderline
      className={cx(
        s.tag,
        big && s.big,
        huge && s.huge,
        highlighted && s.highlighted,
        active && s.active,
      )}
      href={href}
    >
      {uppercaseFirstLetter(text)}
    </NavLink>
  );
};
