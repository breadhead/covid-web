import * as React from 'react'
import { connect } from 'react-redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'

import { currentUser } from '@app/features/login/features/user'
import { fetchClaim, getClaim } from './features/claimData'
import { Props as PageProps } from './page'

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
      const user = await reduxStore.dispatch(currentUser() as any)

      return { roles: user.roles }
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
