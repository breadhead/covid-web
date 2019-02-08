import * as React from 'react'
import * as styles from './Header.css'

import { getToken } from '@app/features/landing/features/home/molecules/StartConsultationButton/selectors'
import { State } from '@app/lib/store'
import Logo from '@app/ui/atoms/Logo'
import MediaQuery, { Query } from '@app/ui/molecules/MediaQuery'
import { connect } from 'react-redux'
import Menu from './organisms/Menu'
import Navigation from './organisms/Navigation'

interface Props {
  token: string
}

const Header = ({ token }: Props) => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo wrapperClassName={styles.logo} />
        <MediaQuery query={Query.ToExtraLarge}>
          <Menu />
        </MediaQuery>
        <MediaQuery query={Query.FromExtraLarge}>
          <Navigation showLoginButton={token.length === 0} />
        </MediaQuery>
      </header>
    </div>
  )
}

const mapState = (state: State) => ({
  token: getToken(state),
})

export default connect(mapState)(Header)
