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
import {
  submitRatingAnswerAction,
  fetchRatingQuestionsAction,
} from './domain/actions'
import { selectRatingAnswerError } from './domain/selectors/selectRatingAnswerError'
import { selectRatingQuestions } from './domain/selectors/selectRatingQuestions'
import withLockScroll from '@breadhead/with-scroll-lock'
import { RatingAnswerI } from './organisms/RatingQuestion/types/RatingAnswerI'
import { selectPhone } from '@app/features/common/consultation/selectors';

export const FINISH_MODAL_KEY = 'finish-modal'

const mapState = (state: State) => ({
  claimId: getClaimId(state),
  claimStatus: getClaimStatus(state),
  ratingError: selectRatingAnswerError(state),
  questions: selectRatingQuestions(state),
  phone: selectPhone(state)
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
  submitRatingAnswer: (data: RatingAnswerI) =>
    dispatch(submitRatingAnswerAction(data) as any),
  fetchRatingQuestions: () => dispatch(fetchRatingQuestionsAction() as any),
})

export default compose(
  withLockScroll,
  isModal(FINISH_MODAL_KEY),
  withModal,
  connect(
    mapState,
    mapDispatch,
  ),
)
