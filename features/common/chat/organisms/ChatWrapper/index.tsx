/* eslint-disable react/display-name */
import * as React from 'react'

import { ChatMessage } from '@app/models/Claim/ChatMessage'

import * as styles from './ChatWrapper.css'

import EmptyWindow from '../EmptyWindow'
import Message from '../Message'
import MessageLoader from '../MessageLoader'

interface Props {
  messages: ChatMessage[]
  role: string
  loading?: boolean
}

const ChatWrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ messages, role, loading }: Props, ref) => {
    return messages.length === 0 ? (
      <EmptyWindow role={role} />
    ) : (
      <div className={styles.chatWrapper} ref={ref!}>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        {loading && <MessageLoader />}
      </div>
    )
  },
)

export default ChatWrapper
