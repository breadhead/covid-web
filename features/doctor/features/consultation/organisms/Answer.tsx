import React from 'react'
import Router from 'next/router'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { Button } from '@front/ui/button'
import * as styles from './Answer.css'

interface Props {
  claimId: string
  status: ClaimStatus
}

const Answer = ({ claimId, status }: Props) =>
  status !== ClaimStatus.DeliveredToCustomer &&
  status !== ClaimStatus.AnswerValidation ? (
    <Button
      className={styles.AnswerButton}
      onClick={() => Router.push(`/doctor/answers/${claimId}#expert-answers`)}
    >
      Заполнить ответ
    </Button>
  ) : null

export default Answer
