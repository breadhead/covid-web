import * as React from 'react'

import * as styles from './FinishModal.css'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { RatingQuestion } from '../RatingQuestion/RatingQuestion'
import { RatingAnswerI } from '../RatingQuestion/RatingAnswerI'
import { RatingQuestionI } from '../RatingQuestion/RatingQuestionI'

interface Props {
  closeClaim: (id: string) => Promise<void>
  claimId: string
  refetchClaim: (id: string) => Promise<void>
  claimStatus: ClaimStatus
  submitRatingAnswer: (data: RatingAnswerI) => Promise<void>
  ratingError: string
  fetchRatingQuestions: () => Promise<RatingQuestionI[]>
  questions: RatingQuestionI[]
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
    const { submitRatingAnswer, ratingError, claimId, questions } = this.props

    return (
      <article className={styles.modal}>
        <h1 className={styles.text}>
          Спасибо!
          <br />
          Мы рады, что ваша консультация прошла успешно
        </h1>
        <RatingQuestion
          claimId={claimId}
          submit={submitRatingAnswer}
          error={ratingError}
          questions={questions}
        />
      </article>
    )
  }
}
