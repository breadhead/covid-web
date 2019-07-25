import React from 'react'
import { useState, useEffect } from 'react'

import {
  ExpertAnswers,
  makeQuestionGroups,
  fetchQuotaClaim,
  getClaimStatus,
} from '@app/features/common/consultation'
import { Form } from '@app/features/common/form'

import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import { makeInitialValues } from '../../helpers/makeInitialValues'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import * as styles from './Answers.css'
import { makeFieldName } from '../../helpers/makeFieldName'
import { TextArea } from '@app/features/common/form'
import * as yup from 'yup'
import { useThunk } from '@app/src/hooks/useThunk'
import { Controls } from '../controls/Controls'
import { useMappedState } from 'redux-react-hook'

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
  const [isEditMode, setEditMode] = useState(true)
  const [isPreAnswer, setPreAnswer] = useState(false)
  const currentClaimStatus = useMappedState(getClaimStatus)

  const dispatch = useThunk()

  useEffect(
    () => {
      if (!!claim.defaultQuestions[0].answer) {
        setEditMode(false)
      }

      if (currentClaimStatus === ClaimStatus.AnswerValidation) {
        setEditMode(true)
      }
    },
    [claim],
  )

  const renderTextAreas = (
    theme: string,
    { question }: { question: string },
  ) => {
    return (
      <TextArea
        validate={yup.string().required('Обязательное поле')}
        className={styles.textarea}
        name={makeFieldName(theme, question)}
      />
    )
  }

  const onSubmit = async (fields: Fields) => {
    if (isPreAnswer) {
      setEditMode(false)
      await onPreSave(fields)
      await dispatch(fetchQuotaClaim(mainInfo.id))
    } else {
      await onSave(fields)
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
            title="Вопросы эксперту"
            renderCustomAnswer={isEditMode ? renderTextAreas : undefined}
          />
          <Controls
            styles={styles}
            isEditMode={isEditMode}
            setPreAnswer={setPreAnswer}
            setEditMode={setEditMode}
            answerSent={answerSent}
            id={claim.id}
          />
        </>
      )}
    </Form>
  )
}

export default Answers
