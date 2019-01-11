import * as React from 'react'

import { AppContext } from '@app/lib/server-types'

import { fetchClaim } from './actions'
import { Props as PageProps } from './page'

interface Query {
  id: string
}

type Props = PageProps

const Container = (WrappedComponent: React.ComponentType<PageProps>) => (
  additionalProps: Partial<PageProps>,
  layout: React.ComponentType,
) => {
  return class extends React.Component<Props> {
    public static async getInitialProps({
      reduxStore,
      query,
    }: AppContext<Query>) {
      const { id } = query

      return await reduxStore.dispatch(fetchClaim(id) as any)
    }

    public render() {
      return (
        <WrappedComponent
          {...this.props}
          {...additionalProps}
          layout={layout}
        />
      )
    }
  }
}

export default Container
