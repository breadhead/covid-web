import { State } from '@app/lib/store'
import ClaimBoardCard from '@app/models/Claim/ClaimBoardCard'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { getTrelloUrl } from './selectors'

export const MODAL_KEY = 'bind-quota'

export interface ContainerProps {
  fetchClaimBoardCard: (id: string) => Promise<ClaimBoardCard>
  trelloUrl?: string
}

const Container = (WrappedComponent: any) => {
  return class extends React.Component<ContainerProps> {
    public render() {
      return (
        <WrappedComponent {...this.props} trelloUrl={this.props.trelloUrl} />
      )
    }
  }
}

const mapState = (state: State) => ({
  trelloUrl: getTrelloUrl(state),
})

export default compose(
  connect(
    mapState,
    null,
  ),
  Container,
)
