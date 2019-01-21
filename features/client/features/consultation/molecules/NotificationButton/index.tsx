import * as React from 'react'

import * as styles from './NotificationButton.css'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
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
}

const NotificationButton = ({ type, info }: Props) => {
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
      return (
        <DeliveredToCustomerButton
          className={styles.button}
          claimId={info.id}
        />
      )
    case Closed:
      return <ClosedButton className={styles.button} claimId={info.id} />
    default:
      return null
  }
}

export default NotificationButton
