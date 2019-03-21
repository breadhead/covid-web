import * as React from 'react'

import * as styles from './QuestionNotification.css'

import { connect } from 'react-redux'

import { ListedClaim } from '@app/models/Claim/ListedClaim'

import { State } from '@app/lib/store'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { Button, ButtonKind, ButtonSize } from '@front/ui/button'
import FinishButton from '../../molecules/FinishButton'
import { getClientInfo } from '../selectors'

interface Props {
  mainInfo: ListedClaim
}

const STATUSES_WITH_VISIBLE_EXPERTS_BLOCK = [ClaimStatus.DeliveredToCustomer]

const QuestionNotification = ({ mainInfo }: Props) =>
  STATUSES_WITH_VISIBLE_EXPERTS_BLOCK.includes(mainInfo.status) ? (
    <article className={styles.questionNotification}>
      <div className={styles.container}>
        <p className={styles.text}>
          Нам важно получить обратную связь от{NON_BREAKING_SPACE}вас
        </p>
        <h3 className={styles.title}>
          Эксперт понятно ответил на все ваши вопросы?
        </h3>
        <FinishButton className={styles.finishButton} />
        <Button size={ButtonSize.ExtraLarge} kind={ButtonKind.Extra}>
          Нет
        </Button>
      </div>
    </article>
  ) : null

const mapState = (state: State) => ({
  mainInfo: getClientInfo(state),
})

export default connect(mapState)(QuestionNotification as any) as any
