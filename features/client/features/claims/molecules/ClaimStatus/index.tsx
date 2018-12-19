import Router from 'next/router'

import { ShortClaim } from '@app/models/Claim/ShortClaim'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

import Messages from '../../atoms/Messages'
import Point from '../../atoms/Point'
import styles from './ClaimStatus.css'
import getAction from './helpers/getAction'
import getSubtitle from './helpers/getSubtitle'
import getTitle from './helpers/getTitle'
import isActive from './helpers/isActive'

type Props = Pick<ShortClaim, 'status' | 'id' | 'expireAt' | 'email'>

const Status = ({ status, id, expireAt, email }: Props) => {
  const active = isActive(status)
  const action = getAction(status)

  return (
    <div className={styles.container}>
      <Point active={active} className={styles.point} />
      <Messages
        active={active}
        title={getTitle(status)}
        subtitle={getSubtitle(status, { expireAt, email })}
      />
      {action && (
        <Button
          kind={active ? ButtonKind.Primary : ButtonKind.Secondary}
          className={styles.action}
          onClick={() => Router.push(`/client/cliam/${id}`)}
        >
          {action}
        </Button>
      )}
    </div>
  )
}

export default Status
