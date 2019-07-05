import React from 'react'
import Router from 'next/router'
import * as yup from 'yup'

import { ExpertAnswers } from '@app/features/common/consultation'
import { useCallback, useState, useEffect } from 'react'
import { Form, TextArea } from '@app/features/common/form'
import { ButtonKind, ButtonWithTooltip } from '@app/features/common/form'
import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import { Button } from '@front/ui/button'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { makeFieldName } from '../../helpers/makeFieldName'
import * as styles from './Answers.css'
import { saveAnswerDraft, getAnswerDraft } from './localStorage'

interface Answers {
  [key: string]: string
}
export interface Fields {
  answers: Answers
}

export interface Props {
  claim: AnswerClaim
  mainInfo: ListedClaim
  claimStatus?: ClaimStatus
  onSubmit: (fields: Fields) => Promise<any>
}

const Answers = ({ claim, onSubmit, claimStatus, mainInfo }: Props) => {
  const [draft, getDraft] = useState({})
  const answerSent = claimStatus === ClaimStatus.AnswerValidation

  const saveEnteredValues = useCallback(
    async fields => saveAnswerDraft(fields),
    [],
  )

  useEffect(
    () => {
      getDraft(getAnswerDraft())
    },
    [saveEnteredValues],
  )

  return (
    <Form
      onSubmit={onSubmit as any}
      initialValues={draft}
      saveDebounced={saveEnteredValues}
      saveOnBlur={saveEnteredValues}
    >
      {() => (
        <>
          <ExpertAnswers
            claim={claim}
            mainInfo={mainInfo}
            title="Вопросы эксперту"
            renderCustomAnswer={(theme, { question }) => (
              <TextArea
                validate={yup.string().required('Обязательное поле')}
                className={styles.textarea}
                name={makeFieldName(theme, question)}
              />
            )}
          />
          <div className={styles.controls}>
            <ButtonWithTooltip submit>
              {answerSent ? 'Сохранить изменения' : 'Отправить ответ'}
            </ButtonWithTooltip>
            <Button
              kind={ButtonKind.Secondary}
              onClick={() =>
                Router.push(`/consultation/redirect/${claim.id}`) as any
              }
            >
              Отменить изменения
            </Button>
          </div>
        </>
      )}
    </Form>
  )
}

export default Answers
