import * as React from 'react';

import Legal from '@app/ui/organisms/Footer/components/Legal';
import { footerProjects } from '@app/ui/organisms/Footer/components/Partners/footerProjects';
import { SystemButton, SystemButtonSize } from '@app/src/ui/systemButton ';
import { NavLink } from '@app/src/ui/nav-link';

import * as styles from './SystemFooter.css';
import { SystemFooterMenu } from './system-footer-menu';

export const SystemFooter = () => {
  return (
    <footer className={styles.footer}>
      <SystemFooterMenu />
      <NavLink
        className={styles.mobileButton}
        withoutUnderline
        href="/#donation"
      >
        <SystemButton size={SystemButtonSize.Small}>
          Помочь проекту
        </SystemButton>
      </NavLink>
      <div className={styles.projects}>
        {footerProjects.map(({ id, text, logo, href }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={id}
            href={href}
            className={styles.project}
          >
            <p className={styles.text}>{text}</p>
            <img className={styles.logo} src={logo} alt={text} />
          </a>
        ))}
      </div>

      <Legal className={styles.legal} />
    </footer>
  );
};
