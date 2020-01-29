import * as React from 'react'
import * as s from './YesChatButton.css'
import { Button } from '@app/src/ui/button'
import cx from 'classnames'
import { Role } from '@app/models/Users/User'
import { useApi } from '@app/lib/api/useApi'
import { DontUnderstandEnum } from '@app/features/client/features/consultation/DontUnderstandEnum'
import { useSpecificModal } from '../../modal'

interface YesChatButtonProps {
  roles: Role[]
  claimId: string
  disabled: boolean
  author?: string | null
}

export const YesChatButton = ({
  author = null,
  roles,
  claimId,
  disabled,
}: YesChatButtonProps) => {
  const api = useApi()
  const { open } = useSpecificModal('finish-modal')

  const onYesButtonClick = async () => {
    if (!roles.includes(Role.Client)) return
    open()
    await api.updateDontUnderstand({
      id: claimId,
      status: DontUnderstandEnum.YES,
    })
  }

  return (
    <article className={!!author ? s.message : cx(s.message, s.messageSent)}>
      <Button
        disabled={disabled}
        onClick={onYesButtonClick}
        className={s.button}
      >
        Да, мне всё понятно
      </Button>
    </article>
  )
}
