import * as React from 'react';
import cx from 'classnames';

import Footer, {FooterTheme, FooterType} from '@app/src/ui/organisms/Footer';

import * as styles from './Page.css';
import Header from '../organisms/Header';

interface Props {
  children: React.ReactNode;
  footerType?: FooterType;
  footerTheme?: FooterTheme;
  className?: string;
}

export class MainLayout extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    footerType: FooterType.Primary,
    footerTheme: FooterTheme.Default,
  };

  public render() {
    const { children, footerType, footerTheme, className } = this.props;

    return (
      <React.Fragment>
        <Header />
        <main className={cx(styles.Main, className)}>{children}</main>
        <Footer type={footerType} theme={footerTheme} />
      </React.Fragment>
    );
  }
}
