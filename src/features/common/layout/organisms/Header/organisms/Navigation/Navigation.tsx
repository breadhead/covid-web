import * as React from 'react';
import cx from 'classnames';

import { Button, ButtonKind } from '@app/src/ui/button';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';
import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './Navigation.css';
import NavIcon from '../../atoms/NavIcon';
import LoginButton from '../../atoms/LoginButton';
import SignInMobileMenu from '../SignInMobileMenu';
import { ClientMenu } from '../ClientMenu';

interface Props {
  showLoginButton?: boolean;
  signOut: () => void;
  className?: string;
  hide?: () => void;
}

export const Navigation = ({
  className,
  hide,
  showLoginButton,
  signOut,
}: Props) => (
  <nav className={cx(styles.menu, className)}>
    <NavLink withoutUnderline href="/ask/experts" className={styles.link}>
      Эксперты справочной
      <NavIcon />
    </NavLink>

    {!!showLoginButton ? (
      <LoginButton className={styles.loginButton}>Войти</LoginButton>
    ) : (
      <>
        <MediaQuery query={Query.FromExtraLarge}>
          <ClientMenu className={styles.loginMenu} signOut={signOut} />
        </MediaQuery>
        <MediaQuery
          className={styles.mobileMenuWrapper}
          query={Query.ToExtraLarge}
        >
          <SignInMobileMenu signOut={signOut} />
        </MediaQuery>
      </>
    )}
  </nav>
);
