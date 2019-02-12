import * as React from 'react'

import {
  getAuthorLogin,
  getClientClaimsList,
} from '@app/features/common/consultation/selectors'
import { State } from '@app/lib/store'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { connect } from 'react-redux'

import { getClientClaims } from '@app/features/common/consultation/actions'
import { AnyAction, compose, Dispatch } from 'redux'
import { getBrowserQuery } from './selectors'
interface Props {
  getListOfClientClaims: (login: string) => Promise<any>
  clientClaims: ShortClaim[]
  authorLogin: string
  browserQuery: any
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<Props> {
    public componentDidMount() {
      const { authorLogin, browserQuery } = this.props
      this.props.getListOfClientClaims(authorLogin || browserQuery.id)
    }

    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapState = (state: State) => ({
  clientClaims: getClientClaimsList(state),
  authorLogin: getAuthorLogin(state),
  browserQuery: getBrowserQuery(state),
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
