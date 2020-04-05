import React from 'react';

import { NavLink } from '@app/src/ui/nav-link';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';
import NavIcon from '@app/src/ui/organisms/Footer/components/NavIcon';

import * as styles from './SystemFooterMenu.css';
import { linksMobile, linksDesktop } from '../links';

export const SystemFooterMenu = () => {
  return (
    <nav className={styles.navigation}>
      {/* десктоп */}
      <MediaQuery className={styles.desktopWrapper} query={Query.FromMedium}>
        {linksDesktop.map((link) => {
          if (!link.title) {
            return <div className={styles.stub} />;
          }

          return (
            <NavLink
              key={link.title}
              withoutUnderline
              href={link.href}
              className={styles.link}
            >
              {link.title}
            </NavLink>
          );
        })}
      </MediaQuery>

      {/* мобилка */}
      <MediaQuery className={styles.mobileNav} query={Query.ToMedium}>
        {linksMobile.map((link) => (
          <NavLink
            key={link.title}
            withoutUnderline
            href={link.href}
            className={styles.link}
          >
            {link.title}
            <NavIcon />
          </NavLink>
        ))}
      </MediaQuery>
    </nav>
  );
};
