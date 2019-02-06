import * as React from 'react'

import * as styles from './NotificationButton.css'

import Claim from '@app/models/Claim/Claim'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { answerAvailable } from '@front/domain/claim/statements/answerAvailable'
import ClosedButton from './components/ClosedButton'
import DeliveredToCustomerButton from './components/DeliveredToCustomerButton'
import QuestionnaireWaitingButton from './components/QuestionnaireWaitingButton'

export enum NotifiationButtonType {
  QuestionnaireWaiting = 'QuestionnaireWaiting',
  Denied = 'Denied',
  QueueForQuota = 'QueueForQuota',
  DeliveredToCustomer = 'DeliveredToCustomer',
  Closed = 'Closed',
}

interface Props {
  type: NotifiationButtonType
  info: ListedClaim
  claim: Claim
}

const NotificationButton = ({ type, info, claim }: Props) => {
  const {
    QuestionnaireWaiting,
    DeliveredToCustomer,
    Closed,
  } = NotifiationButtonType

  switch (type) {
    case QuestionnaireWaiting:
      return (
        <QuestionnaireWaitingButton
          className={styles.button}
          claimId={info.id}
        />
      )
    case DeliveredToCustomer:
      return answerAvailable(claim) ? (
        <DeliveredToCustomerButton
          className={styles.button}
          claimId={info.id}
        />
      ) : null
    case Closed:
      return answerAvailable(claim) ? (
        <ClosedButton className={styles.button} claimId={info.id} />
      ) : null
    default:
      return null
  }
}

export default NotificationButton
