import * as React from 'react'
import * as styles from './Chat.css'

import cx from 'classnames'

import { Form, TextArea } from '@app/features/common/form'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { ButtonType } from '@app/ui/atoms/Button'
import IconCustom from '@app/ui/atoms/IconCustom'

import ChatWrapper from '../organisms/ChatWrapper'
import Header from '../organisms/Header'

export interface FormFileds {
  message: string
}

export interface Props {
  isOpen: boolean
  messages: ChatMessage[]
  opensOnce: boolean
  closeChat: () => void
  onSubmit: (values: FormFileds) => Promise<void>
}

const Chat = ({ isOpen, messages, closeChat, onSubmit, opensOnce }: Props) => (
  <section className={cx(styles.chat, (!opensOnce || !isOpen) && styles.hide)}>
    <div>
      <Header onCloseButtonClick={closeChat} />
    </div>
    <div className={styles.messageWrapper}>
      <ChatWrapper messages={messages} />
    </div>
    <Form
      onSubmit={onSubmit as any}
      className={styles.inputWrapper}
      resetAfterSubmit
      forceSubmitOnEnter
    >
      <TextArea
        autosize={{ minRows: 1, maxRows: 4 }}
        className={styles.input}
        name="message"
        disableResizeOnEnter
        placeholder="Ваше сообщение..."
      />
      <button type={ButtonType.Submit} className={styles.sendButton}>
        <IconCustom className={styles.inputIcon} name="24x24_send-message" />
      </button>
    </Form>
  </section>
)

export default Chat
