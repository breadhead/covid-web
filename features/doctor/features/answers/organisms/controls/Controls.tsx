import * as React from 'react'

import Router from 'next/router'
import { ButtonKind, ButtonWithTooltip } from '@app/features/common/form'
import { Button } from '@front/ui/button'
import { useMappedState } from 'redux-react-hook'
import { getClaimStatus } from '@app/features/common/consultation'
import ClaimStatus from '@app/models/Claim/ClaimStatus'

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
  const currentClaimStatus = useMappedState(getClaimStatus)
  const draftControlsCondition = currentClaimStatus === ClaimStatus.AtTheDoctor
  const editControlsCondition =
    currentClaimStatus === ClaimStatus.AtTheDoctor ||
    ClaimStatus.AnswerValidation

  return (
    <div className={styles.controls}>
      {editControlsCondition && (
        <>
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
        </>
      )}
      {draftControlsCondition && (
        <>
          {!isEditMode && (
            <Button
              kind={ButtonKind.Secondary}
              onClick={() => setEditMode(true)}
            >
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
        </>
      )}
    </div>
  )
}
