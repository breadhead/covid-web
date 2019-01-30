import { getClaimId } from '@app/features/common/consultation'
import { getMainInfo } from '@app/features/common/consultation/selectors'
import { State } from '@app/lib/store'
import ClaimBoardCard from '@app/models/Claim/ClaimBoardCard'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
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
      const mainInfo: ListedClaim = (this.props as any).mainInfo || []
      const editClaim = ![
        ClaimStatus.Closed,
        ClaimStatus.Denied,
        ClaimStatus.DeliveredToCustomer,
      ].includes(mainInfo.status)

      const editAnswer = [ClaimStatus.AnswerWaiting].includes(mainInfo.status)

      const toQueue = [ClaimStatus.QuotaAllocation].includes(mainInfo.status)

      return (
        <WrappedComponent
          {...this.props}
          editClaim={editClaim}
          editAnswer={editAnswer}
          toQueue={toQueue}
          trelloUrl={this.props.trelloUrl}
        />
      )
    }
  }
}

const mapState = (state: State) => ({
  trelloUrl: getTrelloUrl(state),
  assignedDoctor: getAssignedDoctor(state),
  id: getClaimId(state),
  mainInfo: getMainInfo(state),
})

export default compose(
  connect(
    mapState,
    null,
  ),
  Container,
)
