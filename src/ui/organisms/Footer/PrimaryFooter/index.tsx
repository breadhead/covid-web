import cx from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';

import Logo from '@app/src/ui/Logo';
import { getToken } from '@app/src/features/login';
import { State } from '@app/src/lib/store';

import Legal from '../components/Legal';
import Login from '../components/Login';
import Menu from '../components/Menu';
import Partners from '../components/Partners';
import * as styles from './PrimaryFooter.css';

// interface Props {
//   token: string
// }

const PrimaryFooter = () => (
  <footer className={styles.footer}>
    <div className={cx(styles.top, styles.row)}>
      <Logo wrapperClassName={styles.logoWrapper} className={styles.logo} />
      <Menu long />
      <Login />
    </div>

    <Partners className={styles.row} />
    <Legal className={styles.row} />
  </footer>
);

const mapState = (state: State) => ({
  token: getToken(state),
});

export default connect(mapState)(PrimaryFooter);
