import * as React from 'react'

import * as styles from './ChatWrapper.css'

import { EmptyWindowText } from '../../page/config'
import EmptyWindow from '../EmptyWindow'
import Message, { MessageType } from '../Message'

interface Props {
  messages: MessageType[]
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
