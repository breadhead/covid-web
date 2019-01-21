import * as React from 'react'

import * as styles from './Notification.css'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import ExternalLink from '@app/ui/molecules/ExternalLink'
import NotificationButton from '../NotificationButton'
import { getNotificationsText } from './helpers'

interface Props {
  info: ListedClaim
}

const Notification = ({ info }: Props) => {
  const content = getNotificationsText(info)
  const { image, title } = content
  return (
    <article className={styles.Notification}>
      {!!image && <img className={styles.logo} src={image} alt={title} />}
      <div>
        <h3 className={styles.title}>{title}</h3>
        {!!content.text && (
          <p className={styles.text}>
            {content.text}
            {!!content.link && (
              <>
                <ExternalLink className={styles.link} href={content.link.href}>
                  {content.link.label}
                </ExternalLink>
                .
              </>
            )}
          </p>
        )}
      </div>
      {!!content.button && (
        <NotificationButton info={info} type={content.button} />
      )}
    </article>
  )
}

export default Notification
