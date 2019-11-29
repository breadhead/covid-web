import * as React from 'react';
import * as s from './YesButton.css'
import { Button } from '@app/src/ui/button';
import cx from 'classnames'

interface YesButtonProps {

}

export const YesButton = ({ }: YesButtonProps) => {
  return <article
    className={cx(s.message, s.messageSent)}
  ><Button
    onClick={() => console.log('yes-button clicked')}
    className={s.button}>Да, мне всё понятно</Button></article>
}
