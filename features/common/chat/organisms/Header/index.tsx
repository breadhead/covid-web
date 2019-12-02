import cx from 'classnames'
import * as React from 'react'

import * as styles from './Header.css'

import { Icon } from '@front/ui/icon'
import { IconsList } from '@front/ui/sprite'
import { Button } from '@app/src/ui/button'
import { Role } from '@app/models/Users/User'
import { YES_BUTTON } from '../../config'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { DontUnderstandEnum } from '@app/features/client/features/consultation/DontUnderstandEnum'

interface Props {
  onCloseButtonClick?: () => void
  roles: Role[]
  send: (data: any) => void
  mainInfo: ListedClaim
}

const authorizedUsers = [Role.CaseManager, Role.Doctor]

const Header = ({ onCloseButtonClick, roles, send, mainInfo }: Props) => {
  const condition = authorizedUsers.includes(roles[0]) && mainInfo.dontUnderstand === DontUnderstandEnum.NO
  
  return (
    <header className={styles.header}>
      <button className={cx(styles.button, styles.buttonChat)}>
        <Icon className={styles.iconChat} name={IconsList.Chat} />
      </button>
      <h3 className={styles.title}>«Просто спросить»</h3>
      {condition && <Button onClick={() => {
        send({ message: YES_BUTTON })
      }
      }>Отправить кнопку «Да, мне всё понятно»</Button>}
      <button
        onClick={onCloseButtonClick}
        className={cx(styles.button, styles.closeButton)}
      >
        <Icon name={IconsList.CloseLight} />
      </button>
    </header>
  )
}

export default Header
