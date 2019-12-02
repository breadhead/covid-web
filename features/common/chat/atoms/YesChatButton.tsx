import * as React from 'react';
import * as s from './YesChatButton.css'
import { Button } from '@app/src/ui/button';
import cx from 'classnames'
import { Role } from '@app/models/Users/User';
import { useApi } from '@app/lib/api/useApi';
import { DontUnderstandEnum } from '@app/features/client/features/consultation/DontUnderstandEnum';

interface YesChatButtonProps {
  author?: string | null
  role: string
  claimId: string
}

export const YesChatButton = ({ author = null, role, claimId }: YesChatButtonProps) => {
  const api = useApi()

  console.log('claimId: YesChatButton', claimId)

  const onYesButtonClick = async () => {
    if (role !== Role.Client) return
    await api.updateDontUnderstand({ id: claimId, status: DontUnderstandEnum.YES })
  }

  return <article
    className={!!author ? s.message : cx(s.message, s.messageSent)}
  ><Button
    onClick={onYesButtonClick}
    className={s.button}>Да, мне всё понятно</Button></article>
}
