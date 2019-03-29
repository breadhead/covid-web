import * as React from 'react'

import * as styles from './Notification.css'

import Claim from '@app/models/Claim/Claim'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { NavLink } from '@front/ui/nav-link'
import NotificationButton from '../NotificationButton'
import { getNotificationsText } from './helpers'

interface Props {
  info: ListedClaim
  claim: Claim
}

const Notification = ({ info, claim }: Props) => {
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
                <NavLink blank className={styles.link} href={content.link.href}>
                  {content.link.label}
                </NavLink>
                .
              </>
            )}
          </p>
        )}
      </div>
      {!!content.button && (
        <NotificationButton info={info} type={content.button} claim={claim} />
      )}
    </article>
  )
}

export default Notification
