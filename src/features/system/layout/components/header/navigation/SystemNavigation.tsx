import * as React from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';

import { useWindowSize } from '@app/src/lib/window-size';

import * as styles from './SystemNavigationContainer.css';
import { LinksList } from './linksList';
import { mainLinks, contentLinks } from '../links';

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
      <LinksList
        styles={styles}
        className={cx(styles.menu, styles.mainMenu)}
        asPath={asPath}
        narrow={narrow}
        width={width}
        linkClassName={cx(styles.mainLink, styles.link)}
      >
        {mainLinks}
      </LinksList>

      <LinksList
        styles={styles}
        className={cx(styles.menu, styles.contentMenu)}
        asPath={asPath}
        narrow={narrow}
        width={width}
        linkClassName={cx(styles.contentLink, styles.link)}
      >
        {contentLinks}
      </LinksList>
    </div>
  );
};
