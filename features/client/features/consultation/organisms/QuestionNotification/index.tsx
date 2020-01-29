import * as React from 'react'
import * as styles from './QuestionNotification.css'

import { CHAT_DEFAULT_OPEN_WIDTH, NON_BREAKING_SPACE } from '@app/lib/config'
import { useCallback, useState } from 'react'
import withWindowSize, { WindowSize } from '@app/features/common/windowSize'

import { ChatFeedback } from './components/ChatFeedback'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { SimpleFeedback } from './components/SimpleFeedback'
import { useAnswerClear } from './useAnswerClear'
import { DontUnderstandEnum } from '../../DontUnderstandEnum'

interface Props {
  focusOnChat: () => void
  openChat: () => void
  windowSize: WindowSize
  claimId: string
  mainInfo: ListedClaim
}

const STATUSES_WITH_VISIBLE_EXPERTS_BLOCK = [ClaimStatus.DeliveredToCustomer]

const QuestionNotification = ({
  focusOnChat,
  windowSize,
  openChat,
  mainInfo,
}: Props) => {
  const [isAnswerClear, setAnswerClear] = useState(true)

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

  return STATUSES_WITH_VISIBLE_EXPERTS_BLOCK.includes(mainInfo.status) ? (
    <div className={styles.wholeBlock}>
      <article id="feedback" className={styles.questionNotification}>
        <div className={styles.container}>
          <p className={styles.text}>
            Нам важно получить обратную связь от{NON_BREAKING_SPACE}вас
          </p>
          {mainInfo.dontUnderstand === DontUnderstandEnum.NO ||
          !isAnswerClear ? (
            <ChatFeedback onClick={onChatButtonClick} />
          ) : (
            <SimpleFeedback
              claimId={mainInfo.id}
              onNoButtonClick={onNoButtonClick}
            />
          )}
        </div>
      </article>
    </div>
  ) : null
}

export default withWindowSize(QuestionNotification as any) as any
