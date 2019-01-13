import * as React from 'react'

import { RadioGroup } from '@app/features/common/form'
import Form from '@app/features/common/form/components/Form'
import { CloseType } from '@app/lib/api/request/CloseClaimRequest'
import Button, { ButtonSize, ButtonType } from '@app/ui/atoms/Button'
import { RadioButtonStyles } from '@app/ui/molecules/RadioGroup'

import closeTypeTitle from './closeTypeTitle'
import styles from './Modal.css'

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

const QuotaType = ({ onFormSubmit }: Props) => (
  <Form
    onSubmit={onFormSubmit as any}
    initialValues={initial}
    className={styles.form}
  >
    <div className={styles.container}>
      <h1 className={styles.title}>Закрыть консультацию</h1>

      <RadioGroup
        className={styles.radioBlock}
        radioStyle={RadioButtonStyles.Radio}
        buttons={closeTypes}
        name="type"
      />
      <RadioGroup
        className={styles.radioBlock}
        radioStyle={RadioButtonStyles.Radio}
        buttons={deallocateQuotaTypes}
        name="deallocateQuota"
        type="radio"
        defaultValue={false}
      />

      <Button
        className={styles.submit}
        size={ButtonSize.Large}
        type={ButtonType.Submit}
      >
        Применить
      </Button>
    </div>
  </Form>
)

export default QuotaType
