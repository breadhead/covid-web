import * as React from 'react'
import * as styles from './Chat.css'

import cx from 'classnames'

import { Form, TextArea } from '@app/features/common/form'
import { State as AppState } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import IconCustom from '@app/ui/IconCustom'

import { getRoles } from '@app/features/login'
import { Role } from '@app/models/Users/User'
import { connect } from 'react-redux'
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
  onTextAreaFocus: () => void
  forwardedRef: React.Ref<HTMLDivElement>
  muted: boolean
  roles: Role[]
}

const Chat = ({
  isOpen,
  messages,
  closeChat,
  onSubmit,
  opensOnce,
  onTextAreaFocus,
  forwardedRef,
  muted,
  roles,
}: Props) => {
  const shouldHide = !opensOnce || !isOpen
  return (
    <section className={cx(styles.chat, shouldHide && styles.hide)}>
      <div>
        <Header onCloseButtonClick={closeChat} />
      </div>
      <div className={styles.messageWrapper}>
        <ChatWrapper role={roles[0]} ref={forwardedRef} messages={messages} />
      </div>
      <Form
        onSubmit={onSubmit as any}
        className={styles.inputWrapper}
        resetAfterSubmit
        forceSubmitOnEnter
      >
        {() =>
          !muted && (
            <>
              <TextArea
                onFocus={onTextAreaFocus}
                autosize={{ minRows: 1, maxRows: 4 }}
                className={styles.input}
                name="message"
                disableResizeOnEnter
                placeholder="Ваше сообщение..."
              />
              <button className={styles.sendButton}>
                <IconCustom
                  className={styles.inputIcon}
                  name="24x24_send-message"
                />
              </button>
            </>
          )
        }
      </Form>
    </section>
  )
}

const mapState = (state: AppState) => ({
  roles: getRoles(state),
})

export default connect(mapState)(Chat) as any
