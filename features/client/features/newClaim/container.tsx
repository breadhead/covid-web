import * as React from 'react'

import { ShortClaimFields } from './organisms/ClaimForm'
import { Props as PageProps } from './page'

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<{}> {
    public render() {
      return <WrappedComponent onFormSubmit={this.onFormSubmit} />
    }

    private onFormSubmit = (claimFields: ShortClaimFields) => {
      // tslint:disable-next-line:no-console
      console.log(claimFields)
      return Promise.resolve()
    }

    private afterSuccess = () => {
      // tslint:disable-next-line:no-console
      console.log('success')
    }
  }
}

export default Container
