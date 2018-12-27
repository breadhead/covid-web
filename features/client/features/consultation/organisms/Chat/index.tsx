import * as React from 'react'

import * as styles from './Chat.css'

import Input from '@app/ui/atoms/Input'
import EmptyWindow from './components/EmptyWindow'
import Header from './components/Header'
import Message, { MessageType } from './components/Message'
import { EmptyWindowText } from './config'

interface Props {
  messages: MessageType[]
  isOpen: boolean
  close: () => void
}

const Chat = ({ messages, close, isOpen }: Props) => {
  const chatBody =
    messages.length === 0 ? (
      <EmptyWindow text={EmptyWindowText} />
    ) : (
      <div className={styles.chatWrapper}>
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    )

  return isOpen ? (
    <section className={styles.chat}>
      <div>
        <Header onCloseButtonClick={close} />
      </div>
      <div className={styles.messageWrapper}>{chatBody}</div>
      <Input
        className={styles.input}
        name="message"
        placeholder="Ваше сообщение..."
      />
    </section>
  ) : null
}

export default Chat
