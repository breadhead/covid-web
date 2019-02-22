import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import {
  fetchClaim,
  getClaimId,
  getClaimStatus,
} from '@app/features/common/consultation'
import { isModal, withModal } from '@app/features/common/modal'
import { closeClaim } from '@app/features/manager/features/closeClaim'
import { CloseType } from '@app/lib/api/request/CloseClaimRequest'
import { State } from '@app/lib/store'

export const MODAL_KEY = 'finish-modal'

const mapState = (state: State) => ({
  claimId: getClaimId(state),
  claimStatus: getClaimStatus(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  closeClaim: (id: string, comment: string) =>
    dispatch(closeClaim({
      id,
      type: CloseType.Successful,
      deallocateQuota: false,
      comment,
    }) as any),
  refetchClaim: (id: string) => dispatch(fetchClaim(id) as any),
})

export default compose(
  isModal(MODAL_KEY),
  withModal,
  connect(
    mapState,
    mapDispatch,
  ),
)
