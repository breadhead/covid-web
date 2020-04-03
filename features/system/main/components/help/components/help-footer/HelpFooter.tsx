import * as React from 'react';

import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './HelpFooter.css';
import { helpFooterSocial } from './helpFooterSocial';
export const HelpFooter = () => {
  return (
    <footer className={styles.helpFooter}>
      <p className={styles.text}>
        Пусть больше людей узнает о проекте
        <span className={styles.textSecondary}>
          Поделитесь с друзьями и коллегами. Вместе победим! 💪
        </span>
      </p>
      <nav className={styles.social}>
        {helpFooterSocial.map((item) => (
          <NavLink
            blank
            withoutUnderline
            href={item.link}
            className={styles.iconWrapper}
            key={item.id}
          >
            <Icon className={styles.icon} name={item.icon} />
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};
