import * as React from 'react'

import * as styles from './Modal.css'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import Info from '../Info'
import Widget from '../Widget'

interface Props {
  closeClaim: (id: string) => Promise<void>
  claimId: string
  refetchClaim: (id: string) => Promise<void>
  claimStatus: ClaimStatus
}

class Modal extends React.Component<Props> {
  public componentDidMount() {
    const { claimStatus, claimId, closeClaim, refetchClaim } = this.props

    if (claimStatus === ClaimStatus.DeliveredToCustomer) {
      closeClaim(claimId).then(() => refetchClaim(claimId))
    }
  }

  public render() {
    return (
      <article className={styles.modal}>
        <h1 className={styles.text}>
          Спасибо!
          <br />
          Мы рады, что ваша консультация прошла успешно
        </h1>
        <Info />
        <Widget />
      </article>
    )
  }
}

export default Modal
