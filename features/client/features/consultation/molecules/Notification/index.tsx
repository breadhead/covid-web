import * as React from 'react'

import * as styles from './Notification.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import Button, { ButtonSize } from '@app/ui/atoms/Button'

export enum ClaimStatus {
  New = 'new',
  QuotaAllocation = 'quota-allocation',
  QueueForQuota = 'queue-for-quota',
  QuestionnaireWaiting = 'questionnaire-waiting',
  QuestionnaireValidation = 'questionnaire-validation',
  AtTheDoctor = 'at-the-doctor',
  AnswerValidation = 'answer-validation',
  DeliveredToCustomer = 'delivered-to-customer',
  ClosedSuccessfully = 'closed-successfully',
  Denied = 'denied',
}

interface ClientNotification {
  id: string
  image: string
  title: string
  text: string
  button: string
}

interface Props {
  status: keyof ClaimStatus
}

const Notification = ({ status }: Props) => {
  console.log('status:', status)
  return (
    <article className={styles.Notification}>
      <img
        className={styles.logo}
        src="http://placecorgi.com/72/72"
        alt="экспертка"
      />
      <div>
        <h3 className={styles.title}>Эксперт ответил на ваши вопросы</h3>
        <p className={styles.text}>
          Если вы хотите что-то уточнить или оставить отзыв, напишите в
          {NON_BREAKING_SPACE}чат{NON_BREAKING_SPACE}в правой части страницы.
        </p>
      </div>
      <Button className={styles.button} size={ButtonSize.Large}>
        Посмотреть ответы эксперта
      </Button>
    </article>
  )
}

export default Notification
