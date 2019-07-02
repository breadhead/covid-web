import React from 'react'
import Router from 'next/router'
import * as yup from 'yup'

import {
  ExpertAnswers,
  makeQuestionGroups,
} from '@app/features/common/consultation'
import { Form, TextArea } from '@app/features/common/form'
import { ButtonKind, ButtonWithTooltip } from '@app/features/common/form'
import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import { Button } from '@front/ui/button'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { makeFieldName } from '../../helpers/makeFieldName'
import { makeInitialValues } from '../../helpers/makeInitialValues'
import * as styles from './Answers.css'

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
  const answerSent = claimStatus === ClaimStatus.AnswerValidation

  return (
    <Form
      onSubmit={onSubmit as any}
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
