import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { selectToken } from '@app/src/features/landing/features/home/molecules/StartConsultationButton/selectors';
import signOut from '@app/src/features/login/features/signOut';
import { State } from '@app/src/lib/store';
import Logo from '@app/src/ui/Logo';
import MediaQuery, { Query } from '@app/src/ui/MediaQuery';

import * as styles from './Header.css';
import Menu from './organisms/Menu';
import { Navigation } from './organisms/Navigation';
import { OtherPartners } from './organisms/OtherPartners';

interface Props {
  token: string;
  signOutOfApp: () => void;
}

const Header = ({ token, signOutOfApp }: Props) => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Navigation
          signOut={signOutOfApp}
          showLoginButton={token.length === 0}
        />
      </header>
    </div>
  );
};

const mapState = (state: State) => ({
  token: selectToken(state),
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  signOutOfApp: () => dispatch(signOut() as any),
});

export default connect(mapState, mapDispatch)(Header);
