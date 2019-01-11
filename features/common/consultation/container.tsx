import * as React from 'react'
import { connect } from 'react-redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'

import { fetchClaim } from './actions'
import { Props as PageProps } from './page'
import { getClaim } from './selectors'

interface Query {
  id: string
}

type Props = PageProps

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  additionalProps: Partial<PageProps>,
  layout: React.ComponentType,
) =>
  connect(mapState)(class extends React.Component<Props> {
    public static async getInitialProps({
      reduxStore,
      query,
    }: AppContext<Query>) {
      await reduxStore.dispatch(fetchClaim(query.id) as any)

      return {}
    }

    public render() {
      const { claim } = this.props as any

      if (!claim) {
        return null
      }

      return (
        <WrappedComponent
          {...this.props}
          {...additionalProps}
          claim={claim}
          layout={layout}
        />
      )
    }
  } as any)

const mapState = (state: State) => ({
  claim: getClaim(state),
})

export default Container
