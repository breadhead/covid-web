import * as React from 'react'

import { RadioGroup } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import { CloseType } from '@app/lib/api/request/CloseClaimRequest'
import Button, { ButtonType } from '@app/ui/atoms/Button'
import { RadioButtonStyles } from '@app/ui/molecules/RadioGroup'

import closeTypeTitle from './closeTypeTitle'

interface CloseClaimFields {
  a: number
}

interface Props {
  onFormSubmit: (data: CloseClaimFields) => Promise<void>
}

const closeTypes = Object.values(CloseType).map(closeType => ({
  id: closeType,
  value: closeType,
  text: closeTypeTitle(closeType),
}))

const deallocateQuotaTypes = [
  {
    id: 'no',
    value: false,
    text: 'Оставить квоту',
  },
  {
    id: 'yes',
    value: true,
    text: 'Снять квоту',
  },
]

const initial = {
  deallocateQuota: false,
}

const QuotaType = ({ onFormSubmit }: Props) => {
  return (
    <section>
      <h1>Закрыть консультацию</h1>
      <Form onSubmit={onFormSubmit as any} initialValues={initial}>
        <RadioGroup
          radioStyle={RadioButtonStyles.Radio}
          buttons={closeTypes}
          name="type"
        />
        <RadioGroup
          radioStyle={RadioButtonStyles.Radio}
          buttons={deallocateQuotaTypes}
          name="deallocateQuota"
          type="radio"
          defaultValue={false}
        />

        <Button type={ButtonType.Submit}>Применить</Button>
      </Form>
    </section>
  )
}

export default QuotaType
