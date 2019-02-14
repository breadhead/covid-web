import * as React from 'react'

import { getClientClaimsList } from '@app/features/common/consultation/selectors'
import { State } from '@app/lib/store'
import { connect } from 'react-redux'

import { getClientClaims } from '@app/features/common/consultation/actions'
import { AppContext } from '@app/lib/server-types'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { compose } from 'redux'

interface Query {
  authorLogin: string
  from: string
}
interface Props {
  getListOfClientClaims: (login: string) => Promise<any>
  clientClaims: ListedClaim[]
  authorLogin: string
  currentClaimId: string
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps(context: AppContext<Query>) {
      const { authorLogin, from } = context.query
      await context.reduxStore.dispatch(getClientClaims(authorLogin) as any)

      return { authorLogin, currentClaimId: from }
    }

    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapState = (state: State) => ({
  clientClaims: getClientClaimsList(state),
})

export default compose(
  connect(mapState),
  Container,
)
