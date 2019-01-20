import * as React from 'react'

import * as styles from './Notification.css'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import NotificationButton, {
  NotifiationButtonType,
} from '../NotificationButton'
import { getNotificationsText } from './helpers'

interface Notification {
  id: string
  image: string
  title: string
  text: string
  button?: NotifiationButtonType
}

interface Props {
  info: ListedClaim
}

const Notification = ({ info }: Props) => {
  const content = getNotificationsText(info)['Закрыта']
  const { image, title } = content
  return (
    <article className={styles.Notification}>
      {!!image && <img className={styles.logo} src={image} alt={title} />}
      <div>
        <h3 className={styles.title}>{title}</h3>
        {!!content.text && <p className={styles.text}>{content.text}</p>}
      </div>
      {!!content.button && (
        <NotificationButton info={info} type={content.button} />
      )}
    </article>
  )
}

export default Notification
