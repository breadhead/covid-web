import * as React from 'react'

import * as styles from './QuestionNotification.css'

import { connect } from 'react-redux'

import { ListedClaim } from '@app/models/Claim/ListedClaim'

import { State } from '@app/lib/store'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import { getClientInfo } from '../selectors'
import ChatFeedback from './components/ChatFeedback'
import SimpleFeedback from './components/SimpleFeedback'

interface Props {
  mainInfo: ListedClaim
  onChatButtonClick: () => void
}

const STATUSES_WITH_VISIBLE_EXPERTS_BLOCK = [ClaimStatus.DeliveredToCustomer]

const QuestionNotification = ({ mainInfo, onChatButtonClick }: Props) => {
  const [isExpertClear, setExpertClear] = React.useState(true)

  return STATUSES_WITH_VISIBLE_EXPERTS_BLOCK.includes(mainInfo.status) ? (
    <article className={styles.questionNotification}>
      <div className={styles.container}>
        <p className={styles.text}>
          Нам важно получить обратную связь от{NON_BREAKING_SPACE}вас
        </p>
        {isExpertClear ? (
          <SimpleFeedback onNoButtonClick={setExpertClear} />
        ) : (
          <ChatFeedback onClick={onChatButtonClick} />
        )}
      </div>
    </article>
  ) : null
}

const mapState = (state: State) => ({
  mainInfo: getClientInfo(state),
})

export default connect(mapState)(QuestionNotification as any) as any
