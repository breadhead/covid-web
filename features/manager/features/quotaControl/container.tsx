import { State } from '@app/lib/store'
import ClaimBoardCard from '@app/models/Claim/ClaimBoardCard'
import { Doctor } from '@app/models/Users/Doctor'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { getAssignedDoctor } from '../chooseDoctor/selectors'
import { getTrelloUrl } from './selectors'

export const MODAL_KEY = 'bind-quota'

export interface ContainerProps {
  fetchClaimBoardCard: (id: string) => Promise<ClaimBoardCard>
  trelloUrl?: string
  assignedDoctor?: Doctor
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
  assignedDoctor: getAssignedDoctor(state),
})

export default compose(
  connect(
    mapState,
    null,
  ),
  Container,
)
