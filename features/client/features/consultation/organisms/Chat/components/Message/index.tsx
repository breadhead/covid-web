import * as React from 'react'

import * as styles from './Message.css'

export interface MessageType {
  author: string
  text: string
  time: string
}

interface Props {
  message: MessageType
}

const Message = ({ message }: Props) => {
  const { author, text, time } = message
  return (
    <article className={styles.message}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{text}</p>
      <p className={styles.sendingTime}>{time}</p>
    </article>
  )
}

export default Message
