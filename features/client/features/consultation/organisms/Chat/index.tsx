import * as React from 'react'

import * as styles from './Chat.css'

import Input from '@app/ui/atoms/Input'
import Header from './components/Header'
import Message, { MessageType } from './components/Message'

interface Props {
  messages: MessageType[]
  isVisible: boolean
  close: () => void
}

const Chat = ({ messages, close, isVisible }: Props) => {
  return isVisible ? (
    <section className={styles.chat}>
      <div>
        <Header onCloseButtonClick={close} />
      </div>
      <div className={styles.messageWrapper}>
        <div className={styles.chatWrapper}>
          {messages.map(message => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
      <Input
        className={styles.input}
        name="message"
        placeholder="Ваше сообщение..."
      />
    </section>
  ) : null
}

export default Chat
