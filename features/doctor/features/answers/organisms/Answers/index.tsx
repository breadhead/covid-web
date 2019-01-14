import Router from 'next/router'

import { ExpertAnswers } from '@app/features/common/consultation'
import { Form, TextArea } from '@app/features/common/form'
import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import Button, { ButtonKind, ButtonType } from '@app/ui/atoms/Button'

interface Props {
  claim: AnswerClaim
}

const Answers = ({ claim }: Props) => (
  <>
    <Form onSubmit={console.log as any}>
      <ExpertAnswers
        claim={claim}
        title="Вопросы эксперту"
        renderCustomAnswer={(theme, { question }) => (
          <TextArea name={`answers[${theme}: ${question}]`} />
        )}
      />
      <Button
        kind={ButtonKind.Secondary}
        onClick={() => Router.push(`/doctor/consultation/${claim.id}`)}
      >
        Отменить
      </Button>
      <Button type={ButtonType.Submit}>Отправить ответ</Button>
    </Form>
  </>
)

export default Answers
