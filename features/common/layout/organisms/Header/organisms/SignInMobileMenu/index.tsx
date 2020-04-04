import * as React from 'react';

import { NavLink } from '@front/ui/nav-link';

import NavIcon from '../../atoms/NavIcon';
import * as styles from './SignInMobileMenu.css';

export interface Props {
  signOut: () => void;
}

const SignInMobileMenu = ({ signOut }: Props) => (
  <>
    <NavLink className={styles.menuItem} withoutUnderline href="/request/chat">
      Мои рекомендации
      <NavIcon />
    </NavLink>
    <NavLink
      blank
      href="https://cabinet.nenaprasno.ru"
      className={styles.menuItem}
    >
      Личный кабинет
      <NavIcon />
    </NavLink>
    <div className={styles.menuItem} onClick={signOut}>
      Выйти
      <NavIcon />
    </div>
  </>
);

export default SignInMobileMenu;
