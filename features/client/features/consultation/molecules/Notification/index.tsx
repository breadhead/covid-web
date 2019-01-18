import * as React from 'react'

import * as styles from './Notification.css'

import Button, { ButtonSize } from '@app/ui/atoms/Button'

import { notifications } from './notifications'

interface Notification {
  id: string
  image: string
  title: string
  text: string
  button: string
}

interface Props {
  status: string
}

const Notification = ({ status }: Props) => {
  const { image, title, text, button } = notifications[status]
  return (
    <article className={styles.Notification}>
      {!!image && <img className={styles.logo} src={image} alt={title} />}
      <div>
        <h3 className={styles.title}>{title}</h3>
        {!!text && <p className={styles.text}>{text}</p>}
      </div>
      {!!button && (
        <Button className={styles.button} size={ButtonSize.Large}>
          {button}
        </Button>
      )}
    </article>
  )
}

export default Notification
