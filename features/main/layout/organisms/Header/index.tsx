import * as React from 'react'
import * as styles from './Header.css'

import { getToken } from '@app/features/landing/features/home/molecules/StartConsultationButton/selectors'
import signOut from '@app/features/login/features/signOut'
import { State } from '@app/lib/store'
import Logo from '@app/ui/atoms/Logo'
import MediaQuery, { Query } from '@app/ui/molecules/MediaQuery'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import Menu from './organisms/Menu'
import Navigation from './organisms/Navigation'

interface Props {
  token: string
  signOut: () => void
}

const Header = ({ token }: Props) => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo wrapperClassName={styles.logo} />
        <MediaQuery query={Query.ToExtraLarge}>
          <Menu signOut={signOut} />
        </MediaQuery>
        <MediaQuery query={Query.FromExtraLarge}>
          <Navigation signOut={signOut} showLoginButton={token.length === 0} />
        </MediaQuery>
      </header>
    </div>
  )
}

const mapState = (state: State) => ({
  token: getToken(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  signOut: () => dispatch(signOut() as any),
})

export default connect(
  mapState,
  mapDispatch,
)(Header)
