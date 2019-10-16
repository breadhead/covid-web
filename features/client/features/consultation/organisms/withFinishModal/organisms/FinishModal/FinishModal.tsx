import * as React from 'react'

import * as styles from './FinishModal.css'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { FinishQuestion } from '../FinishQuestion/FinishQuestion'

interface Props {
  closeClaim: (id: string) => Promise<void>
  claimId: string
  refetchClaim: (id: string) => Promise<void>
  claimStatus: ClaimStatus
  submitRatingAnswer: (id: number, text: string) => Promise<void>
}

export class FinishModal extends React.Component<Props> {
  // TODO: return it
  // public componentDidMount() {
  //   const { claimStatus, claimId, closeClaim, refetchClaim } = this.props;

  // if (claimStatus === ClaimStatus.DeliveredToCustomer) {
  //   closeClaim(claimId).then(() => refetchClaim(claimId));
  // }
  // }

  public render() {
    return (
      <article className={styles.modal}>
        <h1 className={styles.text}>
          Спасибо!
          <br />
          Мы рады, что ваша консультация прошла успешно
        </h1>
        <FinishQuestion submit={this.props.submitRatingAnswer} />
      </article>
    )
  }
}
