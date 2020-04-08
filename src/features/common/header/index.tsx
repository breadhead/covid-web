import * as React from 'react';
import cx from 'classnames';

import LogoClient from '@app/src/ui/LogoClient';
import { ClientMenu } from '@app/src/features/common/layout/organisms/Header/organisms/ClientMenu';

import * as styles from './Header.css';

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => (
  <header className={cx(styles.header, className)}>
    <LogoClient />
    <ClientMenu />
  </header>
);

export default Header;
