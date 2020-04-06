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

export const SystemMobileMenu = () => {
  const [menuOpened, setOpened] = useState(false);
  const { open: openSignIn } = useModal();

  const show = useCallback(() => setOpened(true), []);
  const hide = useCallback(() => setOpened(false), []);

  const [askLink] = mainLinks;
  return (
    <div>
      <Overlay isVisible={menuOpened} onClick={hide} />
      <BurgerButton show={show} />
      <TransitionMenu isVisible={menuOpened}>
        <nav className={styles.menu}>
          <header className={styles.header}>
            <SystemLogo className={styles.logo} />
            <button className={styles.closeButton} onClick={hide}>
              закрыть меню
              <Icon className={styles.NavIcon} name={IconsList.CloseSystem} />
            </button>
          </header>

          <div className={styles.mainMenu}>
            <NavLink
              withoutUnderline
              className={cx(styles.askLink, styles.mainLink)}
              key={askLink.href}
              href={askLink.href}
            >
              {askLink.text}
            </NavLink>
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

            {mainLinks.slice(1).map((link) => (
              <NavLink
                withoutUnderline
                className={styles.mainLink}
                key={link.href}
                href={link.href}
              >
                {link.text}
              </NavLink>
            ))}
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
            href="/#donation"
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
