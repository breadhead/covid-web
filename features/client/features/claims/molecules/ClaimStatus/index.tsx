import Router from 'next/router'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import Button, { ButtonKind } from '@app/ui/atoms/Button'

import Messages from '../../atoms/Messages'
import Point from '../../atoms/Point'
import styles from './ClaimStatus.css'
import getAction from './helpers/getAction'
import getSubtitle from './helpers/getSubtitle'
import getTitle from './helpers/getTitle'
import isActive from './helpers/isActive'

interface Props {
  status: ClaimStatus
  id: string
}

const Status = ({ status, id }: Props) => {
  const active = isActive(status)

  return (
    <div className={styles.container}>
      <Point active={active} className={styles.point} />
      <Messages
        active={active}
        title={getTitle(status)}
        subtitle={getSubtitle(status, new Date())}
      />
      <Button
        kind={active ? ButtonKind.Primary : ButtonKind.Secondary}
        className={styles.action}
        onClick={() => Router.push(`/client/cliam/${id}`)}
      >
        {getAction(status)}
      </Button>
    </div>
  )
}

export default Status
