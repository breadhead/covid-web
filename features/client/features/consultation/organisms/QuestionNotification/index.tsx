import * as React from 'react'

import * as styles from './QuestionNotification.css'

import { connect } from 'react-redux'

import { ListedClaim } from '@app/models/Claim/ListedClaim'

import { State } from '@app/lib/store'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import FinishButton from '../../molecules/FinishButton'
import { getClientInfo } from '../selectors'

interface Props {
  mainInfo: ListedClaim
}

const STATUSES_WITH_VISIBLE_EXPERTS_BLOCK = [
  ClaimStatus.Closed,
  ClaimStatus.DeliveredToCustomer,
]

const QuestionNotification = ({ mainInfo }: Props) =>
  STATUSES_WITH_VISIBLE_EXPERTS_BLOCK.includes(mainInfo.status) ? (
    <article id="expert-answers" className={styles.questionNotification}>
      <h3 className={styles.title}>
        Эксперт понятно ответил на все ваши вопросы?
      </h3>
      <FinishButton className={styles.button} />
      <p className={styles.text}>
        Если у{NON_BREAKING_SPACE}вас остались вопросы к эксперту, вы можете
        задать их в{NON_BREAKING_SPACE}чате.
        <br />
        Там же вы можете оставить отзыв о{NON_BREAKING_SPACE}работе сервиса.
        <br /> <br />
        Если у вас не{NON_BREAKING_SPACE}осталось вопросов к{NON_BREAKING_SPACE}
        эксперту, нажмите кнопку “Спасибо”.
      </p>
    </article>
  ) : null

const mapState = (state: State) => ({
  mainInfo: getClientInfo(state),
})

export default connect(mapState)(QuestionNotification as any) as any
