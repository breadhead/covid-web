import Router from 'next/router'

import { ExpertAnswers } from '@app/features/common/consultation'
import { Form, TextArea } from '@app/features/common/form'
import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import Button, { ButtonKind, ButtonType } from '@app/ui/atoms/Button'

import * as styles from './Answers.css'

interface Props {
  claim: AnswerClaim
}

const Answers = ({ claim }: Props) => (
  <Form onSubmit={console.log as any}>
    <ExpertAnswers
      claim={claim}
      title="Вопросы эксперту"
      renderCustomAnswer={(theme, { question }) => (
        <TextArea
          className={styles.textarea}
          name={`answers[${theme}: ${question}]`}
        />
      )}
    />
    <div className={styles.controls}>
      <Button type={ButtonType.Submit}>Отправить ответ</Button>
      <Button
        kind={ButtonKind.Secondary}
        onClick={() => Router.push(`/doctor/consultation/${claim.id}`)}
      >
        Отменить
      </Button>
    </div>
  </Form>
)

export default Answers
