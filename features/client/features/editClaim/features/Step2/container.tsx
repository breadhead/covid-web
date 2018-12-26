import { AppContext } from '@app/lib/server-types'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import * as React from 'react'
import { shortClaim as shortClaimAction } from './actions'
import { Props as PageProps } from './page'
interface Props {
  shortClaim: ShortClaim
}

interface Query {
  id: string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps(context: AppContext<Query>) {
      const { id } = context.query

      const shortClaim = await context.reduxStore.dispatch(shortClaimAction(
        id,
      ) as any)
      return {
        shortClaim,
      }
    }
    public render() {
      const { shortClaim } = this.props
      return (
        <WrappedComponent
          shortClaim={shortClaim}
          onFormSubmit={this.onFormSubmit}
        />
      )
    }

    private onFormSubmit = () => true
  }
}

export default Container
