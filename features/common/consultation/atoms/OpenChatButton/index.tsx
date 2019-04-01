import * as React from 'react'
import * as styles from './OpenChatButton.css'

import { Icon } from '@front/ui/icon'
import { IconsList } from '@front/ui/sprite'

interface Props {
  onClick: () => void
  haveNewMessage: boolean
}

const OpenChatButton = ({ onClick, haveNewMessage }: Props) => (
  <button onClick={onClick} className={styles.openChatButton}>
    {haveNewMessage ? (
      <Icon name={IconsList.ChatNewMessage} />
    ) : (
      <Icon name={IconsList.Chat} />
    )}
  </button>
)

export default OpenChatButton
