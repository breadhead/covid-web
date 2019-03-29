import * as React from 'react'
import * as styles from './Chat.css'

import cx from 'classnames'

import { Form, TextArea } from '@app/features/common/form'
import { State as AppState } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { Icon } from '@front/ui/icon'

import { getRoles } from '@app/features/login'
import { Role } from '@app/models/Users/User'
import { connect } from 'react-redux'
import Uploader from '../../uploader'
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
  scrollToBottom: () => void
  muted: boolean
  roles: Role[]
  focused?: boolean
  setUnfocused?: () => void
}

const Chat = ({
  isOpen,
  messages,
  closeChat,
  onSubmit,
  opensOnce,
  onTextAreaFocus,
  forwardedRef,
  scrollToBottom,
  muted,
  roles,
  focused,
  setUnfocused,
}: Props) => {
  const shouldHide = !opensOnce || !isOpen

  const [uploading, setUploading] = React.useState(false)

  const onUpload = async (file: string) => {
    setUploading(true)
    scrollToBottom()
    await onSubmit({ message: file })
    setUploading(false)
  }

  return (
    <section className={cx(styles.chat, shouldHide && styles.hide)}>
      <div>
        <Header onCloseButtonClick={closeChat} />
      </div>
      <div className={styles.messageWrapper}>
        <ChatWrapper
          loading={uploading}
          role={roles[0]}
          ref={forwardedRef}
          messages={messages}
        />
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
              <Uploader onUploaded={onUpload} className={styles.uploader}>
                <Icon className={styles.attachIcon} name="attach-file" />
              </Uploader>
              <TextArea
                focused={focused}
                setUnfocused={setUnfocused}
                onFocus={onTextAreaFocus}
                autosize={{ minRows: 1, maxRows: 4 }}
                className={styles.input}
                name="message"
                disableResizeOnEnter
                placeholder="Ваше сообщение..."
              />
              <button className={styles.sendButton}>
                <Icon className={styles.inputIcon} name="send-message" />
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
