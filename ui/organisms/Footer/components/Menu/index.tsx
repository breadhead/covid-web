import React from 'react';

import { NavLink } from '@front/ui/nav-link';

import stylesLong from './MenuLong.css';
import stylesShort from './MenuShort.css';
import NavIcon from '../NavIcon';

const linksShort = [
  { title: 'О проекте', href: '/#about' },
  { title: 'Помочь проекту', href: '/#donation' },
  { title: 'Обратная связь', href: '/contacts' },
];

const linksLong = [
  { title: 'О проекте', href: '/#about' },
  { title: 'Контакты', href: '/contacts' },
  { title: 'Помочь проекту', href: '#donation' },
  { title: 'Обратная связь', href: '/contacts' },
  { title: 'Эксперты', href: '/experts' },
];

interface Props {
  long?: boolean;
  blank?: boolean;
}

const Menu = ({ long, blank = false }: Props) => {
  const links = !!long ? linksLong : linksShort;

  const styles = !!long ? stylesLong : stylesShort;

  return (
    <nav className={styles.menu}>
      {links.map(({ title, href }) => (
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
      ))}
    </nav>
  );
};

export default Menu;
