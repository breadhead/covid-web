import React, { useState, useCallback } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';
import { RouteType } from '@app/src/lib/routing/RouteType';
import { SystemLogo } from '@app/src/ui/system-logo';
import BurgerButton from '@app/src/features/common/layout/organisms/Header/atoms/BurgerButton';
import { useScrollBodyLock } from '@app/src/lib/scroll-lock/useScrollBodyLock';

import * as styles from './SystemHeader.css';
import { SystemMobileMenu } from './system-mobile-menu';
import { SystemNavigationContainer } from './navigation/SystemNavigationContainer';

interface SystemHeaderProps {
  white?: boolean;
}

export const SystemHeader = ({ white }: SystemHeaderProps) => {
  const { route } = useRouter();
  const [show, setShow] = useState(true);
  const [menuOpened, setOpened] = useState(false);
  const { lock, unlock } = useScrollBodyLock();

  const showMenu = useCallback(() => {
    setOpened(true);
    lock();
  }, []);
  const hideMenu = useCallback(() => {
    setOpened(false);
    unlock();
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y > -50) {
        setShow(true);
      } else {
        const isShow = currPos.y > prevPos.y;
        if (isShow !== show) {
          setShow(isShow);
        }
      }
    },
    [show],
    undefined,
    false,
    300,
  );

  return (
    <>
      <SystemMobileMenu hide={hideMenu} menuOpened={menuOpened} />
      <header
        className={cx(
          styles.headerWrapper,
          white && styles.white,
          show ? styles.show : styles.hide,
          route === RouteType.landing && styles.landing,
        )}
      >
        <SystemLogo className={styles.logo} />
        <SystemNavigationContainer />
        <MediaQuery
          className={styles.mobileMenuContainer}
          query={Query.ToLarge}
        >
          <NavLink
            className={styles.donationMobileLink}
            withoutUnderline
            href="/#donation"
          >
            Помочь
          </NavLink>
        </MediaQuery>
        <div className={styles.burger}>
          <BurgerButton show={showMenu} />
        </div>
      </header>
    </>
  );
};
