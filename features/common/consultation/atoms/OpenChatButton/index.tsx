import * as React from 'react'
import * as styles from './OpenChatButton.css'

import IconCustom from '@app/ui/IconCustom'

interface Props {
  onClick: () => void
  haveNewMessage: boolean
}

const OpenChatButton = ({ onClick, haveNewMessage }: Props) => (
  <button onClick={onClick} className={styles.openChatButton}>
    {haveNewMessage ? (
      <IconCustom className={styles.icon} name="32x32_chat_new-message" />
    ) : (
      <IconCustom className={styles.icon} name="32x32_chat" />
    )}
  </button>
)

export default OpenChatButton
