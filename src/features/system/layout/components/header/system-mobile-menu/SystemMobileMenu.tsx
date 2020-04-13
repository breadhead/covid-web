import React, { useState, useCallback } from 'react';
import cx from 'classnames';

import Overlay from '@app/src/ui/Overlay';
import BurgerButton from '@app/src/features/common/layout/organisms/Header/atoms/BurgerButton';
import { TransitionMenu } from '@app/src/features/common/layout/organisms/Header/organisms/Menu/TransitionMenu';
import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';
import { Button, ButtonSize, ButtonKind } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';
import { useModal } from '@app/src/features/common/modal';
import { SystemLogo } from '@app/src/ui/system-logo';
import { SIGN_IN_MODAL } from '@app/src/domain/reducers/signInReducer/const';

import * as styles from './SystemMobileMenu.css';
import { contentLinks, mainLinks } from '../links';

interface SystemMobileMenu {
  menuOpened: boolean;
  hide: () => void;
}

export const SystemMobileMenu = ({ menuOpened, hide }: SystemMobileMenu) => {
  const { open: openSignIn } = useModal();

  const [askLink] = mainLinks;
  return (
    <div>
      <Overlay isVisible={menuOpened} onClick={hide} />
      <TransitionMenu isVisible={menuOpened}>
        <nav className={styles.menu}>
          <header className={styles.header}>
            <button className={styles.closeButton} onClick={hide}>
              закрыть меню
              <Icon className={styles.NavIcon} name={IconsList.CloseSystem} />
            </button>
          </header>

          <div className={styles.mainMenu}>
            {mainLinks.map((link) => (
              <NavLink
                withoutUnderline
                className={styles.mainLink}
                key={link.href}
                href={link.href}
              >
                {link.mobileMenuText}
              </NavLink>
            ))}
            <div className={styles.askLinks}>
              <Button
                onClick={() => openSignIn(SIGN_IN_MODAL)}
                className={styles.loginButton}
                kind={ButtonKind.Secondary}
                size={ButtonSize.Small}
              >
                Войти
              </Button>
              <NavLink
                withoutUnderline
                className={styles.expertsLink}
                href={'/ask/experts'}
              >
                Эксперты справочной
              </NavLink>
            </div>
          </div>

          <div className={styles.contentMenu}>
            {contentLinks.map((link) => (
              <NavLink
                withoutUnderline
                className={styles.contentLink}
                key={link.href}
                href={link.href}
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          <NavLink
            className={styles.helpButtonWrap}
            withoutUnderline
            href="/#help"
          >
            <Button onClick={hide} size={ButtonSize.Small}>
              Помочь проекту
            </Button>
          </NavLink>
        </nav>
      </TransitionMenu>
    </div>
  );
};
