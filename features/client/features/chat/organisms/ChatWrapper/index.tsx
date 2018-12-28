import * as React from 'react'

import { ChatMessage } from '@app/models/Claim/ChatMessage'

import * as styles from './ChatWrapper.css'

import { EmptyWindowText } from '../../page/config'
import EmptyWindow from '../EmptyWindow'
import Message from '../Message'

interface Props {
  messages: ChatMessage[]
}

const ChatWrapper = ({ messages }: Props) =>
  messages.length === 0 ? (
    <EmptyWindow text={EmptyWindowText} />
  ) : (
    <div className={styles.chatWrapper}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )

export default ChatWrapper
