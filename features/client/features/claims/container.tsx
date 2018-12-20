import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { ListedClaim } from '@app/models/Claim/ListedClaim'

import { fetchClaims } from './actions'
import { Props as PageProps } from './page'
import { getClaims, getLoaded } from './selectors'

interface Props {
  claims: ListedClaim[]
  loaded: boolean
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) =>
  class extends React.Component<Props> {
    public static async getInitialProps(context: AppContext) {
      await context.reduxStore.dispatch(fetchClaims() as any)
      return {}
    }

    public render() {
      const { claims } = this.props

      return <WrappedComponent claims={claims} />
    }
  }

const mapState = (state: State) => ({
  claims: getClaims(state),
  loaded: getLoaded(state),
})

export default compose(
  connect(mapState),
  Container,
)
