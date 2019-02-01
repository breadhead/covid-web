import { getClaimId } from '@app/features/common/consultation'
import {
  getMainInfo,
  getQuotaName,
} from '@app/features/common/consultation/selectors'
import { State } from '@app/lib/store'
import ClaimBoardCard from '@app/models/Claim/ClaimBoardCard'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { Doctor } from '@app/models/Users/Doctor'

import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { getRoles } from '@app/features/login'
import { Role } from '@app/models/Users/User'
import { getAssignedDoctor } from '../chooseDoctor/selectors'
import { canEditClaim, Position } from './helpers/canEditClaim'
import { getTrelloUrl } from './selectors'

export const MODAL_KEY = 'bind-quota'

export interface ContainerProps {
  fetchClaimBoardCard: (id: string) => Promise<ClaimBoardCard>
  trelloUrl?: string
  assignedDoctor?: Doctor
  roles: Role[]
  position?: Position
  allowAnswerEditing?: boolean
}

const Container = (WrappedComponent: any) => {
  return class extends React.Component<ContainerProps> {
    public render() {
      const { roles, position, allowAnswerEditing } = this.props
      const mainInfo: ListedClaim = (this.props as any).mainInfo || []
      const editClaim = canEditClaim(mainInfo.status, roles, position)

      const editAnswer =
        ClaimStatus.AnswerValidation === mainInfo.status &&
        position === Position.Footer &&
        allowAnswerEditing

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
  roles: getRoles(state),
  quotaName: getQuotaName(state),
})

export default compose(
  connect(
    mapState,
    null,
  ),
  Container,
)
