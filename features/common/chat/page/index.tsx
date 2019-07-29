import * as React from 'react'
import * as styles from './Chat.css'

import cx from 'classnames'

import { Form, TextArea } from '@app/features/common/form'
import { State as AppState } from '@app/lib/store'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { Icon } from '@front/ui/icon'

import { getRoles } from '@app/features/login'
import { Role } from '@app/models/Users/User'
import { IconsList } from '@front/ui/sprite'
import { connect } from 'react-redux'
import Uploader from '../../uploader'
import ChatWrapper from '../organisms/ChatWrapper'
import Header from '../organisms/Header'
import { useGoogleAnalyticsPush } from '../../analytics/useGoogleAnalyticsPush/useGoogleAnalyticsPush'
import { SourceEnum } from '../../analytics/useGoogleAnalyticsPush/SourceEnum'
import { useMappedState } from 'redux-react-hook'
import { getClaimStatus } from '../../consultation'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { getPreviewLink } from '@app/features/client/features/preview-image'
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
  host: string
}

const claimStatusesAfterAnswer = [
  ClaimStatus.Closed,
  ClaimStatus.DeliveredToCustomer,
  ClaimStatus.Denied,
  ClaimStatus.ClosedWithoutAnswer,
]

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
  host,
}: Props) => {
  const shouldHide = !opensOnce || !isOpen

  const [uploading, setUploading] = React.useState(false)
  const currentClaimStatus = useMappedState(getClaimStatus)
  const gtmPush = useGoogleAnalyticsPush(SourceEnum.Chat)
  const onUpload = async (file: string) => {
    setUploading(true)
    scrollToBottom()
    await onSubmit({ message: `https://${host}${getPreviewLink(file)}` })
    setUploading(false)
  }

  const onFormSubmit = async (data: any) => {
    onSubmit(data)

    if (
      !!currentClaimStatus &&
      claimStatusesAfterAnswer.includes(currentClaimStatus)
    ) {
      gtmPush.smsSend()
    }
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
        onSubmit={onFormSubmit as any}
        className={styles.inputWrapper}
        resetAfterSubmit
        forceSubmitOnEnter
      >
        {() =>
          !muted && (
            <>
              <Uploader onUploaded={onUpload} className={styles.uploader}>
                <Icon
                  className={styles.attachIcon}
                  name={IconsList.AttachFile}
                />
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
                <Icon
                  className={styles.inputIcon}
                  name={IconsList.SendMessage}
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
