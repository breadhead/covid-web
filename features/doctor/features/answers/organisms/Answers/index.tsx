import Router from 'next/router'
import * as yup from 'yup'

import {
  ExpertAnswers,
  makeQuestionGroups,
} from '@app/features/common/consultation'
import { Form, TextArea } from '@app/features/common/form'
import {
  ButtonKind,
  ButtonType,
  ButtonWithTooltip,
} from '@app/features/common/form'
import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import Button from '@app/ui/Button'

import ClaimStatus from '@app/models/Claim/ClaimStatus'
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
  claimStatus?: ClaimStatus
  onSubmit: (fields: Fields) => Promise<any>
}

const Answers = ({ claim, onSubmit, claimStatus }: Props) => {
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
            <ButtonWithTooltip type={ButtonType.Submit}>
              {answerSent ? 'Сохранить изменения' : 'Отправить ответ'}
            </ButtonWithTooltip>
            <Button
              kind={ButtonKind.Secondary}
              onClick={() => Router.push(`/consultation/redirect/${claim.id}`)}
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
