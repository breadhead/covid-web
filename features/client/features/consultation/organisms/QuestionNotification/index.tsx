import * as React from 'react'

import * as styles from './QuestionNotification.css'

import { connect } from 'react-redux'
import { compose } from 'recompose'

import { ListedClaim } from '@app/models/Claim/ListedClaim'

import { State } from '@app/lib/store'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

import withWindowSize, { WindowSize } from '@app/features/common/windowSize'
import { CHAT_DEFAULT_OPEN_WIDTH, NON_BREAKING_SPACE } from '@app/lib/config'
import { getClientInfo } from '../selectors'
import ChatFeedback from './components/ChatFeedback'
import SimpleFeedback from './components/SimpleFeedback'

interface Props {
  mainInfo: ListedClaim
  focusOnChat: () => void
  openChat: () => void
  windowSize: WindowSize
}

const STATUSES_WITH_VISIBLE_EXPERTS_BLOCK = [ClaimStatus.DeliveredToCustomer]

const QuestionNotification = ({
  mainInfo,
  focusOnChat,
  windowSize,
  openChat,
}: Props) => {
  const [isExpertClear, setExpertClear] = React.useState(true)

  const onNoButtonClick = () => {
    setExpertClear(false)
  }

  const onChatButtonClick = () => {
    const { width } = windowSize

    if (width < CHAT_DEFAULT_OPEN_WIDTH) {
      openChat()
      focusOnChat()
    } else {
      focusOnChat()
    }
  }

  return STATUSES_WITH_VISIBLE_EXPERTS_BLOCK.includes(mainInfo.status) ? (
    <article className={styles.questionNotification}>
      <div className={styles.container}>
        <p className={styles.text}>
          Нам важно получить обратную связь от{NON_BREAKING_SPACE}вас
        </p>
        {isExpertClear ? (
          <SimpleFeedback onNoButtonClick={onNoButtonClick} />
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

export default compose(
  withWindowSize,
  connect(mapState),
)(QuestionNotification as any) as any
