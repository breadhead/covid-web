import * as React from 'react'

import Router from 'next/router'
import { ButtonKind, ButtonWithTooltip } from '@app/features/common/form'
import { Button } from '@front/ui/button'

interface Props {
  styles: { [key: string]: string }
  isEditMode: boolean
  setPreAnswer: (val: boolean) => void
  setEditMode: (val: boolean) => void
  answerSent: boolean
  id: string
}

export const Controls = ({
  styles,
  isEditMode,
  setPreAnswer,
  setEditMode,
  answerSent,
  id,
}: Props) => {
  return (
    <div className={styles.controls}>
      {isEditMode && (
        <Button
          className={styles.cancel}
          kind={ButtonKind.Secondary}
          onClick={() => Router.push(`/consultation/redirect/${id}`) as any}
        >
          Отменить изменения
        </Button>
      )}
      <ButtonWithTooltip
        className={styles.save}
        submit
        onClick={() => setPreAnswer(false)}
      >
        {answerSent ? 'Сохранить изменения' : 'Отправить ответ'}
      </ButtonWithTooltip>
      {!isEditMode && (
        <Button kind={ButtonKind.Secondary} onClick={() => setEditMode(true)}>
          Редактировать
        </Button>
      )}
      {isEditMode && (
        <ButtonWithTooltip
          className={styles.draft}
          kind={ButtonKind.Secondary}
          submit
          onClick={() => {
            setPreAnswer(true)
          }}
        >
          Сохранить как черновик
        </ButtonWithTooltip>
      )}
    </div>
  )
}