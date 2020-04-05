import React from 'react';

import { NavLink } from '@app/src/ui/nav-link';

import stylesLong from './MenuLong.css';
import stylesShort from './MenuShort.css';
import NavIcon from '../NavIcon';

export interface PrimaryFooterLink {
  title: string;
  href: string;
}
interface Props {
  long?: boolean;
  blank?: boolean;
  linksLong: PrimaryFooterLink[];
  linksShort: PrimaryFooterLink[];
}

const PrimaryFooterMenu = ({
  long,
  linksLong,
  linksShort,
  blank = false,
}: Props) => {
  const links = !!long ? linksLong : linksShort;

  const styles = !!long ? stylesLong : stylesShort;

  return (
    <nav className={styles.menu}>
      {links.map(({ title, href }) => {
        return (
          <NavLink
            blank={blank}
            key={title}
            withoutUnderline
            href={href}
            className={styles.link}
          >
            {title}
            <NavIcon long={!!long} />
          </NavLink>
        );
      })}
    </nav>
  );
};

export default PrimaryFooterMenu;
