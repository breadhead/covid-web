import * as React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import * as styles from './SystemNavigationContainer.css';
import { LinksList } from './linksList';
import { mainLinks, contentLinks } from '../links';

interface Props {
  narrow?: boolean;
  className?: string;
}

export const SystemNavigation = ({ className, narrow }: Props) => {
  const { asPath } = useRouter();

  return (
    <div className={cx(styles.menu, className)}>
      <LinksList
        styles={styles}
        className={cx(styles.menu, styles.mainMenu)}
        asPath={asPath}
        narrow={narrow}
        linkClassName={cx(styles.mainLink, styles.link)}
      >
        {mainLinks}
      </LinksList>

      <LinksList
        styles={styles}
        className={cx(styles.menu, styles.contentMenu)}
        asPath={asPath}
        narrow={narrow}
        linkClassName={cx(styles.contentLink, styles.link)}
      >
        {contentLinks}
      </LinksList>
    </div>
  );
};
