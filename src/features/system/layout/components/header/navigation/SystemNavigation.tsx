import * as React from 'react';
import cx from 'classnames';

import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './SystemNavigation.css';

interface Props {
  className?: string;
  hide?: () => void;
}

export const SystemNavigation = ({ className, hide }: Props) => (
  <div className={cx(styles.menu, className)}>
    <button className={styles.closeButton} onClick={hide}>
      закрыть меню
      <Icon className={styles.NavIcon} name={IconsList.CloseLight} />
    </button>
    <div className={styles.mainMenu}>
      <NavLink
        withoutUnderline
        href="/ask"
        className={cx(styles.mainLink, styles.link)}
      >
        Справочная служба
      </NavLink>
      <NavLink
        withoutUnderline
        href="/doctors"
        className={cx(styles.mainLink, styles.link)}
      >
        Врачам
      </NavLink>
      <NavLink
        withoutUnderline
        href="/for-clinics"
        className={cx(styles.mainLink, styles.link)}
      >
        Помощь больницам
      </NavLink>
    </div>

    <div className={styles.contentMenu}>
      <NavLink
        withoutUnderline
        href="/experts"
        className={cx(styles.contentLink, styles.link)}
      >
        Эксперты
      </NavLink>
      <NavLink
        withoutUnderline
        href="/partners"
        className={cx(styles.contentLink, styles.link)}
      >
        Партнеры
      </NavLink>
      <NavLink
        withoutUnderline
        href="/reports"
        className={cx(styles.contentLink, styles.link)}
      >
        Отчёты
      </NavLink>
    </div>
  </div>
);