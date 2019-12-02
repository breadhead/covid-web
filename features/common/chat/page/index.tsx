import * as React from 'react'
import * as styles from './Chat.css'

import cx from 'classnames'

import { Form, TextArea } from '@app/features/common/form'

import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { Icon } from '@front/ui/icon'


import { Role } from '@app/models/Users/User'
import { IconsList } from '@front/ui/sprite'

import Uploader from '../../uploader'
import ChatWrapper from '../organisms/ChatWrapper'
import Header from '../organisms/Header'
import { useGoogleAnalyticsPush } from '../../analytics/useGoogleAnalyticsPush/useGoogleAnalyticsPush'
import { SourceEnum } from '../../analytics/useGoogleAnalyticsPush/SourceEnum'
import { useMappedState } from 'redux-react-hook'
import { getClaimStatus } from '../../consultation'
import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { getDownloadLink } from './helpers/getDownloadLink'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { useSpecificModal } from '../../modal'
import { FINISH_MODAL_KEY } from '@app/features/client/features/consultation'
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
  claimId: string
  mainInfo: ListedClaim
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
  mainInfo
}: Props) => {
  const shouldHide = !opensOnce || !isOpen

  const [uploading, setUploading] = React.useState(false)
  const currentClaimStatus = useMappedState(getClaimStatus)
  const gtmPush = useGoogleAnalyticsPush(SourceEnum.Chat)
  const onUpload = async (file: string) => {
    setUploading(true)
    scrollToBottom()
    await onSubmit({ message: getDownloadLink(host, file) })
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
        <Header send={onFormSubmit} roles={roles} onCloseButtonClick={closeChat} mainInfo={mainInfo} />
      </div>
      <div className={styles.messageWrapper}>
        <ChatWrapper
          loading={uploading}
          roles={roles}
          ref={forwardedRef}
          messages={messages}
          claimId={mainInfo.id}
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

export default Chat
