import * as React from 'react'

import {
  getAuthorLogin,
  getClientClaimsList,
} from '@app/features/common/consultation/selectors'
import { State } from '@app/lib/store'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { connect } from 'react-redux'

import { getClientClaims } from '@app/features/common/consultation/actions'
import { AppContext } from '@app/lib/server-types'
import { AnyAction, compose, Dispatch } from 'redux'

interface Query {
  authorLogin: string
}
interface Props {
  getListOfClientClaims: (login: string) => Promise<any>
  clientClaims: ShortClaim[]
  authorLogin: string
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps(context: AppContext<Query>) {
      const { authorLogin } = context.query
      await context.reduxStore.dispatch(getClientClaims(authorLogin) as any)

      return {}
    }

    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapState = (state: State) => ({
  clientClaims: getClientClaimsList(state),
  authorLogin: getAuthorLogin(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  getListOfClientClaims: (login: string) =>
    dispatch(getClientClaims(login) as any),
})

export default compose(
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
