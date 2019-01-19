import * as React from 'react'

import * as styles from './NotificationButton.css'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import QuestionnaireWaitingButton from './Buttons/QuestionnaireWaitingButton'

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
  const { QuestionnaireWaiting } = NotifiationButtonType

  if (type === QuestionnaireWaiting) {
    return (
      <QuestionnaireWaitingButton className={styles.button} claimId={info.id} />
    )
  }

  return <article className={styles.Notification} />
}

export default NotificationButton
