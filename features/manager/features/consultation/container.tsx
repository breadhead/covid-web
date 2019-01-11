import * as React from 'react'

import { AppContext } from '@app/lib/server-types'

import { fetchClaim } from './actions'
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

      const claim = await reduxStore.dispatch(fetchClaim(id) as any)

      return { ...claim }
    }

    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default Container
