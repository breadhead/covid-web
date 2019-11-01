import * as React from 'react'
import { useCallback, useState } from 'react'
import * as styles from './QuestionNotification.css'

import withWindowSize, { WindowSize } from '@app/features/common/windowSize'
import { CHAT_DEFAULT_OPEN_WIDTH, NON_BREAKING_SPACE } from '@app/lib/config'

import { ChatFeedback } from './components/ChatFeedback'
import { SimpleFeedback } from './components/SimpleFeedback'
import { useAnswerClear } from './useAnswerClear'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { useMappedState } from 'redux-react-hook'
import { getClientInfo } from '../selectors'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

interface Props {
  focusOnChat: () => void
  openChat: () => void
  windowSize: WindowSize
}

const STATUSES_WITH_VISIBLE_EXPERTS_BLOCK = [ClaimStatus.DeliveredToCustomer]

const QuestionNotification = ({ focusOnChat, windowSize, openChat }: Props) => {
  const [isAnswerClear, setAnswerClear] = useState(true)
  const mainInfo: ListedClaim = useMappedState(getClientInfo) as ListedClaim

  useAnswerClear(setAnswerClear, false)

  const onNoButtonClick = useCallback(() => setAnswerClear(false), [])

  const onChatButtonClick = useCallback(
    () => {
      const { width } = windowSize
      if (width < CHAT_DEFAULT_OPEN_WIDTH) {
        openChat()
      }

      focusOnChat()
    },
    [windowSize.width],
  )
  // TODO: return it
  // return STATUSES_WITH_VISIBLE_EXPERTS_BLOCK.includes(mainInfo.status) ? (
  return <div className={styles.wholeBlock}>
    <article id="feedback" className={styles.questionNotification}>
      <div className={styles.container}>
        <p className={styles.text}>
          Нам важно получить обратную связь от{NON_BREAKING_SPACE}вас
          </p>
        {isAnswerClear ? (
          <SimpleFeedback onNoButtonClick={onNoButtonClick} />
        ) : (
            <ChatFeedback onClick={onChatButtonClick} />
          )}
      </div>
    </article>
  </div>
  // ) : null
}

export default withWindowSize(QuestionNotification as any) as any
