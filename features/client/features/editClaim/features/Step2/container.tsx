import { ShortClaim } from '@app/models/Claim/ShortClaim'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { shortClaim as shortClaimAction } from './actions'
import { Props as PageProps } from './page'

interface Props {
  shortClaim: (id: string) => ShortClaim
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<Props> {
    public render() {
      return <WrappedComponent onFormSubmit={this.onFormSubmit} />
    }

    private onFormSubmit = () => true
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  shortClaim: (id: string) => dispatch(shortClaimAction(id) as any),
})

export default compose(
  connect(
    null,
    mapDispatch,
  ),
  Container,
)
