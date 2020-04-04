import * as React from 'react';

import { NavLink } from '@app/src/ui/nav-link';
import Legal from '@app/src/ui/organisms/Footer/components/Legal';
import { footerProjects } from '@app/src/ui/organisms/Footer/components/Partners/footerProjects';

import * as styles from './SystemFooter.css';

// interface SystemFooterProps {}

export const SystemFooter = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <NavLink withoutUnderline href="/experts" className={styles.link}>
          Эксперты
        </NavLink>
        <NavLink withoutUnderline href="/partners" className={styles.link}>
          Партнеры
        </NavLink>
        <NavLink withoutUnderline href="/reports" className={styles.link}>
          Отчёты
        </NavLink>
        <NavLink withoutUnderline href="/contacts" className={styles.link}>
          Контакты
        </NavLink>
      </nav>

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
