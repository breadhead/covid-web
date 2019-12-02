/* eslint-disable react/display-name */
import * as React from 'react'

import { ChatMessage } from '@app/models/Claim/ChatMessage'

import * as styles from './ChatWrapper.css'

import EmptyWindow from '../EmptyWindow'
import Message from '../Message'
import MessageLoader from '../MessageLoader'

import { YES_BUTTON } from '../../config'
import { YesChatButton } from '../../atoms'
import { Role } from '@app/models/Users/User'

interface Props {
  messages: ChatMessage[]
  roles: Role[]
  claimId: string
  loading?: boolean
}

const ChatWrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ messages, roles, claimId, loading }: Props, ref) => {

    return messages.length === 0 ? (
      <EmptyWindow role={roles[0]} />
    ) : (
        <div className={styles.chatWrapper} ref={ref!}>
          {messages.map(message => {
            if (message.content === YES_BUTTON) {
              return <YesChatButton claimId={claimId} author={message.author} roles={roles} />
            }
            return (
              <Message key={message.id} message={message} />
            )
          })}
          {loading && <MessageLoader />}
        </div>
      )
  },
)

export default ChatWrapper
