import * as React from 'react'
import * as styles from './OpenChatButton.css'

import IconCustom from '@app/ui/atoms/IconCustom'

interface Props {
  onClick: () => void
}

const OpenChatButton = ({ onClick }: Props) => (
  <button onClick={onClick} className={styles.openChatButton}>
    <IconCustom name="32x32_chat_new-message" />
  </button>
)

export default OpenChatButton
