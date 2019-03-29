import * as React from 'react'
import * as styles from './OpenChatButton.css'

import { Icon } from '@front/ui/icon'

interface Props {
  onClick: () => void
  haveNewMessage: boolean
}

const OpenChatButton = ({ onClick, haveNewMessage }: Props) => (
  <button onClick={onClick} className={styles.openChatButton}>
    {haveNewMessage ? <Icon name="chat-new-message" /> : <Icon name="chat" />}
  </button>
)

export default OpenChatButton
