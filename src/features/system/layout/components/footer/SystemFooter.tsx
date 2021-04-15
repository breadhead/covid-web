import * as React from 'react';

import { Button, ButtonSize, ButtonKind } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';
import { footerProjects } from '@app/src/ui/organisms/Footer/components/Partners/footerProjects';
import Legal from '@app/src/ui/organisms/Footer/components/Legal';
import { SystemLogo } from '@app/src/ui/system-logo';

import * as styles from './SystemFooter.css';
import { SystemFooterMenu } from './system-footer-menu';

export const SystemFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <SystemLogo className={styles.desktopLogo} />
        <SystemFooterMenu />
        <NavLink
          className={styles.desktopButton}
          withoutUnderline
          href="/#help"
        >
          <Button kind={ButtonKind.Secondary} size={ButtonSize.Small}>
            Помочь проекту
          </Button>
        </NavLink>
      </div>

      <NavLink className={styles.mobileButton} withoutUnderline href="/#help">
        <Button size={ButtonSize.Small}>Помочь проекту</Button>
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
            <img loading="lazy" className={styles.logo} src={logo} alt={text} />
          </a>
        ))}
      </div>

      <Legal className={styles.legal} />
    </footer>
  );
};
