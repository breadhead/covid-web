import * as React from 'react'

import * as styles from './Modal.css'

import DonationWidget from '@app/features/main/donation'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import Info from '../Info'

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
        <p className={styles.text}>
          Мы рады, что ваша консультация прошла успешно
        </p>
        <h1 className={styles.title}>
          Вы поможете другим людям, оформив пожертвование на{NON_BREAKING_SPACE}
          этой странице
        </h1>
        <Info />
        <div className={styles.widget}>
          <DonationWidget />
        </div>
      </article>
    )
  }
}

export default Modal
