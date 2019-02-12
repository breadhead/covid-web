import * as React from 'react'
import { connect } from 'react-redux'

import { fetchClaimBoardCard } from '@app/features/manager/features/quotaControl/actions'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'

import { currentUser, getRoles } from '@app/features/login/features/user'
import { fetchDoctorsIfNeeded } from '@app/features/manager/features/chooseDoctor'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Role } from '@app/models/Users/User'
import { AnyAction, Dispatch } from 'redux'
import { fetchClaim, getClientClaims } from './actions'
import { Props as PageProps } from './page'
import { getAuthorLogin, getClaim, getClientClaimsList } from './selectors'
interface Query {
  id: string
  authorLogin: string
  roles: Role[]
  clientClaims: ShortClaim[]
  getListOfClientClaims: (login: string) => Promise<any>
}

type Props = PageProps

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  additionalProps: Partial<PageProps>,
  layout: React.ComponentType,
) =>
  connect(
    mapState,
    mapDispatch,
  )(class extends React.Component<Props> {
    public static async getInitialProps({
      reduxStore,
      query,
    }: AppContext<Query>) {
      await reduxStore.dispatch(fetchClaim(query.id) as any)
      const user = await reduxStore.dispatch(currentUser() as any)
      await reduxStore
        .dispatch(fetchClaimBoardCard(query.id) as any)
        .catch(() => null) // .catch for roles without access to trello

      await reduxStore.dispatch(fetchDoctorsIfNeeded() as any)

      return { roles: user.roles }
    }

    public componentDidMount() {
      this.props.getListOfClientClaims(this.props.authorLogin)
    }

    public render() {
      const { claim, clientClaims } = this.props

      if (!claim) {
        return null
      }

      return (
        <WrappedComponent
          {...this.props}
          {...additionalProps}
          claim={claim}
          layout={layout}
          clientClaimsCount={clientClaims && clientClaims.length}
        />
      )
    }
  } as any)

const mapState = (state: State) => ({
  claim: getClaim(state),
  authorLogin: getAuthorLogin(state),
  clientClaims: getClientClaimsList(state),
  roles: getRoles(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getListOfClientClaims: (login: string) =>
    dispatch(getClientClaims(login) as any),
})

export default Container as any
