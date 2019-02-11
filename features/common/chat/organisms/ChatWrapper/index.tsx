import * as React from 'react'

import { ChatMessage } from '@app/models/Claim/ChatMessage'

import * as styles from './ChatWrapper.css'

import EmptyWindow from '../EmptyWindow'
import Message from '../Message'

interface Props {
  messages: ChatMessage[]
}

const ChatWrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ messages }: Props, ref) => {
    return messages.length === 0 ? (
      <EmptyWindow />
    ) : (
      <div className={styles.chatWrapper} ref={ref!}>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    )
  },
)

export default ChatWrapper
