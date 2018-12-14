import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { fetchHistory } from './actions'
import { Props as ComponentProps } from './page'
import { getLoading, getTransactions } from './selectors'

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => {
  return class extends React.Component<ComponentProps> {
    public static async getInitialProps({ reduxStore }: AppContext) {
      await reduxStore.dispatch(fetchHistory() as any)

      return {}
    }

    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapState = (state: State) => ({
  transactions: getTransactions(state),
  loading: getLoading(state),
})

const mapDispath = (dispath: Dispatch<AnyAction>) => ({
  fetch: (from?: Date, to?: Date) => dispath(fetchHistory(from, to) as any),
})

export default compose(
  connect(
    mapState,
    mapDispath,
  ),
  Container,
)
