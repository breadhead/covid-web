import * as React from 'react';
import * as s from './YesButton.css'
import { Button } from '@app/src/ui/button';
import cx from 'classnames'
import { Role } from '@app/models/Users/User';

interface YesButtonProps {
  author?: string | null
  role: string
}

export const YesButton = ({ author = null, role }: YesButtonProps) => {
  return <article
    className={!!author ? s.message : cx(s.message, s.messageSent)}
  ><Button
    onClick={() => {
      if (role !== Role.Client) return
      console.log('yes-button clicked')
    }}
    className={s.button}>Да, мне всё понятно</Button></article>
}
