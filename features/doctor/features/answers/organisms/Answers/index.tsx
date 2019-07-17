import React from 'react'
import { useState, useEffect } from 'react'
import Router from 'next/router'

import {
  ExpertAnswers,
  makeQuestionGroups,
  getClaim,
  fetchQuotaClaim
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
import { useMappedState } from 'redux-react-hook'
import { useApi } from '@app/lib/api/useApi'

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
  mainInfo
}: Props) => {
  const answerSent = claimStatus === ClaimStatus.AnswerValidation
  const [isEditMode, setEditMode] = useState(true)
  const [isPreAnswer, setPreAnswer] = useState(false)

  useEffect(
    () => {
      if (!!claim.defaultQuestions[0].answer) {
        setEditMode(false)
      }
    },
    [claim]
  )

  const renderTextAreas = (
    theme: string,
    { question }: { question: string }
  ) => {
    return (
      <TextArea
        validate={yup.string().required('Обязательное поле')}
        className={styles.textarea}
        name={makeFieldName(theme, question)}
      />
    )
  }

  const onSubmit = (fields: Fields) => {
    if (isPreAnswer) {
      setEditMode(false)
      onPreSave(fields)
      // fetchQuotaClaim(mainInfo.id)
    } else {
      onSave(fields)
    }
  }
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
            title='Вопросы эксперту'
            renderCustomAnswer={isEditMode ? renderTextAreas : undefined}
          />
          <div className={styles.controls}>
            {isEditMode && (
              <Button
                className={styles.cancel}
                kind={ButtonKind.Secondary}
                onClick={() =>
                  Router.push(`/consultation/redirect/${claim.id}`) as any
                }
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
          </div>
        </>
      )}
    </Form>
  )
}

export default Answers
