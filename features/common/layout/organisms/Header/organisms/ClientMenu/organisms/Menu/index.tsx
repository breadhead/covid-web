import React from 'react';
import cx from 'classnames';

import Dropdown from '@app/ui/Dropdown';
import { Icon } from '@app/ui/icon';
import { NavLink } from '@app/ui/nav-link';
import { IconsList } from '@app/ui/sprite';

import * as styles from './Menu.css';

interface Props {
  signOut: () => void;
  className?: string;
}

const Menu = ({ signOut, className }: Props) => (
  <nav className={cx(styles.menu, className)}>
    <NavLink
      className={cx(styles.menuItem, styles.consultation)}
      withoutUnderline
      href="/request/chat"
    >
      <Icon className={styles.icon} name={IconsList.MyConsultation} />
      <span className={styles.menuItemText}>Мои рекомендации</span>
    </NavLink>
    <div className={styles.menuItem}>
      <Dropdown signOut={signOut} />
    </div>
  </nav>
);

export default Menu;
