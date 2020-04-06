import React, { useState } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';
import { RouteType } from '@app/src/lib/routing/RouteType';
import { SystemLogo } from '@app/src/ui/system-logo';

import * as styles from './SystemHeader.css';
import { SystemMobileMenu } from './system-mobile-menu';
import { SystemNavigationContainer } from './navigation/SystemNavigationContainer';

export const SystemHeader = () => {
  const { route } = useRouter();
  const [show, setShow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      const isMobile = currPos.y < 0;

      if (isShow !== show) {
        setShow(isShow);
      }
      if (isMobile !== show) {
        setIsMobile(isMobile);
      }
    },
    [show],
    undefined,
    false,
    500,
  );

  return (
    <header
      className={cx(
        styles.headerWrapper,
        show ? styles.show : styles.hide,
        isMobile ? styles.mobile : '',
        route === RouteType.landing && styles.landing,
      )}
    >
      <SystemLogo className={styles.logo} />
      <SystemNavigationContainer narrow={isMobile} />
      <MediaQuery className={styles.mobileMenuContainer} query={Query.ToLarge}>
        <NavLink
          className={styles.donationMobileLink}
          withoutUnderline
          href="/#donation"
        >
          Помочь
        </NavLink>
        <SystemMobileMenu />
      </MediaQuery>
    </header>
  );
};
