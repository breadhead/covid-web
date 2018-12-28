import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'

import { fetchShortClaim } from '../newClaim'
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
      const shortClaim = await reduxStore.dispatch(fetchShortClaim(
        query.id,
      ) as any)

      return {}
    }

    public render() {
      const { shortClaim } = this.props

      return <WrappedComponent shortClaim={shortClaim} />
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
