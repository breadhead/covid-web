import * as React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Icon } from '@app/src/ui/icon';
import { NavLink } from '@app/src/ui/nav-link';
import { IconsList } from '@app/src/ui/sprite';

import * as styles from './SystemNavigation.css';

interface Props {
  className?: string;
  hide?: () => void;
}

export const SystemNavigation = ({ className, hide }: Props) => {
  const { asPath } = useRouter();
  const router = useRouter();
  console.log('SystemNavigation -> router', router);
  return (
    <div className={cx(styles.menu, className)}>
      <button className={styles.closeButton} onClick={hide}>
        закрыть меню
        <Icon className={styles.NavIcon} name={IconsList.CloseLight} />
      </button>

      <div className={styles.mainMenu}>
        {mainLinks.map((link) => (
          <NavLink
            key={link.href}
            withoutUnderline
            href={link.href}
            className={cx(
              link.className,
              asPath === link.href && styles.active,
            )}
          >
            {link.text}
          </NavLink>
        ))}
      </div>

      <div className={styles.contentMenu}>
        {contentLinks.map((link) => (
          <NavLink
            key={link.href}
            withoutUnderline
            href={link.href}
            className={cx(
              link.className,
              asPath === link.href && styles.active,
            )}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const mainLinks = [
  {
    href: '/ask',
    text: 'Справочная служба',
    className: cx(styles.mainLink, styles.link),
  },
  // {
  //   href: '/for-doctors',
  //   text: 'Врачам',
  //   className: cx(styles.mainLink, styles.link),
  // },
  {
    href: '/for-hospitals',
    text: 'Помощь больницам',
    className: cx(styles.mainLink, styles.link),
  },
];

const contentLinks = [
  {
    href: '/experts',
    text: 'Экспертный совет',
    className: cx(styles.contentLink, styles.link),
  },
  {
    href: '/partners',
    text: 'Партнеры',
    className: cx(styles.contentLink, styles.link),
  },
  {
    href: '/news?reports=true',
    text: 'Отчёты',
    className: cx(styles.contentLink, styles.link),
  },
  {
    href: '/contacts',
    text: 'Контакты',
    className: cx(styles.contentLink, styles.link),
  },
];
