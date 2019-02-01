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
import Button from '@app/ui/atoms/Button'

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
  onSubmit: (fields: Fields) => Promise<any>
}

const Answers = ({ claim, onSubmit }: Props) => (
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
            Отправить ответ
          </ButtonWithTooltip>
          <Button
            kind={ButtonKind.Secondary}
            onClick={() => Router.push(`/doctor/consultation/${claim.id}`)}
          >
            Отменить
          </Button>
        </div>
      </>
    )}
  </Form>
)

export default Answers
