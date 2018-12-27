import * as React from 'react'

import * as styles from './Chat.css'

import IconCustom from '@app/ui/atoms/IconCustom'
import TextArea from '@app/ui/atoms/TextArea'
import EmptyWindow from './components/EmptyWindow'
import Header from './components/Header'
import Message, { MessageType } from './components/Message'
import { EmptyWindowText } from './config'

interface Props {
  isOpen: boolean
  messages: MessageType[]
  closeChat: () => void
  sendMessage: () => void
}

const Chat = ({ isOpen, messages, closeChat, sendMessage }: Props) => {
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
        <Header onCloseButtonClick={closeChat} />
      </div>
      <div className={styles.messageWrapper}>{chatBody}</div>
      <div className={styles.inputWrapper}>
        <TextArea
          autosize={{ minRows: 1, maxRows: 4 }}
          className={styles.input}
          name="message"
          placeholder="Ваше сообщение..."
        />
        <button onClick={sendMessage} className={styles.sendButton}>
          <IconCustom className={styles.inputIcon} name="24x24_send-message" />
        </button>
      </div>
    </section>
  ) : null
}

export default Chat
