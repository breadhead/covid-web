import * as React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { Icon } from '@app/src/ui/icon';
import { IconsList } from '@app/src/ui/sprite';
import { useWindowSize } from '@app/src/lib/window-size';

import * as styles from './SystemNavigation.css';
import { LinksList } from './linksList';

interface Props {
  narrow?: boolean;
  className?: string;
  hide?: () => void;
}

export const SystemNavigation = ({ className, hide, narrow }: Props) => {
  const { asPath } = useRouter();
  const { width } = useWindowSize();

  return (
    <div className={cx(styles.menu, className)}>
      <button className={styles.closeButton} onClick={hide}>
        закрыть меню
        <Icon className={styles.NavIcon} name={IconsList.CloseLight} />
      </button>

      <LinksList
        styles={styles}
        className={styles.mainMenu}
        asPath={asPath}
        narrow={narrow}
        width={width}
      >
        {mainLinks}
      </LinksList>

      <LinksList
        styles={styles}
        className={styles.contentMenu}
        asPath={asPath}
        narrow={narrow}
        width={width}
      >
        {contentLinks}
      </LinksList>
    </div>
  );
};

const mainLinks = [
  {
    href: '/ask',
    text: 'Справочная служба',
    narrowText: 'Справочная',
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
    narrowText: 'Больницам',
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
