import * as React from 'react'
import * as styles from './Header.css'

import { selectToken } from '@app/features/landing/features/home/molecules/StartConsultationButton/selectors'
import signOut from '@app/features/login/features/signOut'
import { State } from '@app/lib/store'
import Logo from '@app/ui/Logo'
import MediaQuery, { Query } from '@app/ui/MediaQuery'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import Menu from './organisms/Menu'
import { Navigation } from './organisms/Navigation'

interface Props {
  token: string
  signOutOfApp: () => void
}

const Header = ({ token, signOutOfApp }: Props) => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo wrapperClassName={styles.logo} />
        <MediaQuery
          className={styles.buttonContainer}
          query={Query.ToExtraLarge}
        >
          <Menu signOut={signOutOfApp} showLoginButton={token.length === 0} />
        </MediaQuery>
        <MediaQuery query={Query.FromExtraLarge}>
          <Navigation
            signOut={signOutOfApp}
            showLoginButton={token.length === 0}
          />
        </MediaQuery>
      </header>
    </div>
  )
}

const mapState = (state: State) => ({
  token: selectToken(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  signOutOfApp: () => dispatch(signOut() as any),
})

export default connect(
  mapState,
  mapDispatch,
)(Header)
