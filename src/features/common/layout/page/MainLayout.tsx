import * as React from 'react';
import cx from 'classnames';

import { SystemHeader } from '@app/src/features/system/layout/components/header';
import { SystemFooter } from '@app/src/features/system/layout/components/footer';

import * as styles from './Page.css';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export class MainLayout extends React.Component<Props> {
  public render() {
    const { children, className } = this.props;

    return (
      <React.Fragment>
        <SystemHeader />
        <main className={cx(styles.Main, className)}>{children}</main>
        <SystemFooter />
      </React.Fragment>
    );
  }
}
