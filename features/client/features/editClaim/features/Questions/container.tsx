import * as React from 'react'
import { Props as PageProps } from './page'

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component {
    public render() {
      return <WrappedComponent onFormSubmit={this.onFormSubmit} />
    }

    private onFormSubmit = () => true
  }
}

export default Container
