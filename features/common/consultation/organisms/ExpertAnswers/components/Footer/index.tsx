import * as React from 'react'

import formatDate from '@app/features/client/features/claims/helpers/formatDate'
import * as styles from './Footer.css'
import { getClaimStatus } from '@app/features/common/consultation'
import { useMappedState } from 'redux-react-hook'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { SPACE } from '@app/lib/config'

interface Props {
  answeredAt?: Date
  answerUpdatedAt?: Date
  draftedAt?: Date
}

const Footer = ({ answeredAt, answerUpdatedAt, draftedAt }: Props) => {
  const currentClaimStatus = useMappedState(getClaimStatus)

  const isItDraft = currentClaimStatus === ClaimStatus.AtTheDoctor

  const renderDraftFooter = () => {
    return draftedAt ? (
      <article className={styles.footer}>
        <div className={styles.item}>
          <p className={styles.text}>Ответ не отправлен</p>
          <p className={styles.date}>
            Черновик от{SPACE}
            {formatDate(draftedAt)}
          </p>
        </div>
      </article>
    ) : null
  }

  const renderRegularFooter = () => {
    return answeredAt ? (
      <article className={styles.footer}>
        <div className={styles.item}>
          <p className={styles.text}>Ответ загружен</p>
          <p className={styles.date}>{formatDate(answeredAt)}</p>
        </div>
        {answerUpdatedAt && (
          <div className={styles.item}>
            <p className={styles.text}>Ответ обновлён</p>
            <p className={styles.date}>{formatDate(answerUpdatedAt)}</p>
          </div>
        )}
      </article>
    ) : null
  }

  return isItDraft ? renderDraftFooter() : renderRegularFooter()
}

export default Footer
