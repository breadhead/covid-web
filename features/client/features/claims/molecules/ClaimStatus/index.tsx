import Router from 'next/router'

import { ListedClaim } from '@app/models/Claim/ListedClaim'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

import Messages from '../../atoms/Messages'
import Point from '../../atoms/Point'
import styles from './ClaimStatus.css'
import getAction from './helpers/getAction'
import getPath from './helpers/getPath'
import getSubtitle from './helpers/getSubtitle'
import getTitle from './helpers/getTitle'
import isActive from './helpers/isActive'

type Props = Pick<ListedClaim, 'status' | 'id' | 'expireAt' | 'email'>

const Status = ({ status, id, expireAt, email }: Props) => {
  const active = isActive(status)
  const action = getAction(status)
  const path = getPath(status, id)

  return (
    <div className={styles.container}>
      <Point active={active} className={styles.point} />
      <Messages
        active={active}
        title={getTitle(status)}
        subtitle={getSubtitle(status, { expireAt, email })}
      />
      {action && path && (
        <Button
          kind={active ? ButtonKind.Primary : ButtonKind.Secondary}
          className={styles.action}
          onClick={() => Router.push(path)}
        >
          {action}
        </Button>
      )}
    </div>
  )
}

export default Status
