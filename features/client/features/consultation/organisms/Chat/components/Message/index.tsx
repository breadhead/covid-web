import * as React from 'react'

import * as styles from './Message.css'

export interface MessageType {
  id: string
  author: string
  content: string
  date: string
}

interface Props {
  message: MessageType
}

const Message = ({ message }: Props) => {
  const { author, content, date } = message
  return (
    <article className={styles.message}>
      <p className={styles.author}>{author}</p>
      <p className={styles.content}>{content}</p>
      <p className={styles.sendingTime}>{date}</p>
    </article>
  )
}

export default Message
