import * as React from 'react'

import * as styles from './QuestionNotification.css'

import { useMappedState } from 'redux-react-hook'

import { ListedClaim } from '@app/models/Claim/ListedClaim'

import ClaimStatus from '@app/models/Claim/ClaimStatus'

import withWindowSize, { WindowSize } from '@app/features/common/windowSize'
import { CHAT_DEFAULT_OPEN_WIDTH, NON_BREAKING_SPACE } from '@app/lib/config'
import { getClientInfo } from '../selectors'
import { ChatFeedback } from './components/ChatFeedback'
import { SimpleFeedback } from './components/SimpleFeedback'

interface Props {
  focusOnChat: () => void
  openChat: () => void
  windowSize: WindowSize
}

const STATUSES_WITH_VISIBLE_EXPERTS_BLOCK = [ClaimStatus.DeliveredToCustomer]

const QuestionNotification = ({ focusOnChat, windowSize, openChat }: Props) => {
  const [isExpertClear, setExpertClear] = React.useState(true)
  const mainInfo: ListedClaim = useMappedState(getClientInfo) as ListedClaim

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
    <article id="feedback" className={styles.questionNotification}>
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

export default withWindowSize(QuestionNotification as any) as any
