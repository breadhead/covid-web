import React from 'react'
import { useState } from 'react'
import Router from 'next/router'

import {
  ExpertAnswers,
  makeQuestionGroups,
} from '@app/features/common/consultation'
import { Form } from '@app/features/common/form'
import { ButtonKind, ButtonWithTooltip } from '@app/features/common/form'
import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import { Button } from '@front/ui/button'
import { makeInitialValues } from '../../helpers/makeInitialValues'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import * as styles from './Answers.css'
import { makeFieldName } from '../../helpers/makeFieldName'
import { TextArea } from '@app/features/common/form'
import * as yup from 'yup'

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
  onSave: (fields: Fields) => Promise<any>
  onPreSave: (fields: Fields) => Promise<any>
}

const Answers = ({
  claim,
  onSave,
  onPreSave,
  claimStatus,
  mainInfo,
}: Props) => {
  const answerSent = claimStatus === ClaimStatus.AnswerValidation

  const [isPreAnswer, setPreAnswer] = useState(false)

  return (
    <Form
      onSubmit={isPreAnswer ? onPreSave : (onSave as any)}
      initialValues={claim && makeInitialValues(makeQuestionGroups(claim))}
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
            <Button
              className={styles.cancel}
              kind={ButtonKind.Secondary}
              onClick={() =>
                Router.push(`/consultation/redirect/${claim.id}`) as any
              }
            >
              Отменить изменения
            </Button>
            <ButtonWithTooltip
              className={styles.save}
              submit
              onClick={() => setPreAnswer(false)}
            >
              {answerSent ? 'Сохранить изменения' : 'Отправить ответ'}
            </ButtonWithTooltip>
            <ButtonWithTooltip
              className={styles.draft}
              kind={ButtonKind.Secondary}
              submit
              onClick={() => setPreAnswer(true)}
            >
              Сохранить как черновик
            </ButtonWithTooltip>
          </div>
        </>
      )}
    </Form>
  )
}

export default Answers
