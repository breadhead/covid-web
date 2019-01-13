import * as React from 'react'

import Form from '@app/features/common/form/components/Form'
import Button, { ButtonType } from '@app/ui/atoms/Button'

interface CloseClaimFields {
  a: number
}

interface Props {
  onFormSubmit: (data: CloseClaimFields) => Promise<void>
}

const QuotaType = ({ onFormSubmit }: Props) => {
  return (
    <section>
      <h1>Закрыть?</h1>

      <Form onSubmit={onFormSubmit as any}>
        <Button type={ButtonType.Submit}>Закрыть</Button>
      </Form>
    </section>
  )
}

export default QuotaType
