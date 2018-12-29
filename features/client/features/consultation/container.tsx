import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'

import { fetchSituationClaim } from '../editClaim'
import { fetchShortClaim } from '../newClaim'
import { fetchQuotaClaim } from './actions'
import { Props as PageProps } from './page'

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

interface Query {
  id: string
}

type Props = OwnProps & PageProps

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps({
      reduxStore,
      query,
    }: AppContext<Query>) {
      const { id } = query

      const [shortClaim, situationClaim, quotaClaim] = await Promise.all([
        reduxStore.dispatch(fetchShortClaim(id) as any),
        reduxStore.dispatch(fetchSituationClaim(id) as any),
        reduxStore.dispatch(fetchQuotaClaim(id) as any),
      ])

      return { shortClaim, situationClaim, quotaClaim }
    }

    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapState = (state: State) => ({})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({})

export default compose<PageProps, {}>(
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
