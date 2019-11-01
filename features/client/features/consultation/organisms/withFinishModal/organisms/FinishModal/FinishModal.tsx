import * as React from 'react'

import * as styles from './FinishModal.css'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { RatingQuestion } from '../RatingQuestion/RatingQuestion'
import { RatingQuestionI } from '../RatingQuestion/types/RatingQuestionI'
import { RatingAnswerI } from '../RatingQuestion/types/RatingAnswerI'

interface Props {
  closeClaim: (id: string) => Promise<void>
  claimId: string
  refetchClaim: (id: string) => Promise<void>
  claimStatus: ClaimStatus
  submitRatingAnswer: (data: RatingAnswerI) => Promise<void>
  ratingError: string
  fetchRatingQuestions: () => Promise<RatingQuestionI[]>
  questions: RatingQuestionI[]
  phone: string
}

export class FinishModal extends React.Component<Props> {
  public componentDidMount() {
    const {
      claimStatus,
      claimId,
      closeClaim,
      refetchClaim,
      fetchRatingQuestions,
    } = this.props

    fetchRatingQuestions()
    if (claimStatus === ClaimStatus.DeliveredToCustomer) {
      closeClaim(claimId).then(() => refetchClaim(claimId))
    }
  }

  public render() {
    const { submitRatingAnswer, ratingError, claimId, questions, phone } = this.props

    return (
      <article className={styles.modal}>
        <RatingQuestion
          claimId={claimId}
          submit={submitRatingAnswer}
          error={ratingError}
          questions={questions}
          phone={phone}
        />
      </article>
    )
  }
}
