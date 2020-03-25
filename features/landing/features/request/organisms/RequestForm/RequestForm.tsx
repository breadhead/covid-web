import * as React from 'react'
import { Form, Input, TextArea, RadioGroup } from '@app/features/common/form'
import * as styles from './RequestForm.css'
import cx from 'classnames'
import { Button, ButtonSize } from '@front/ui/button'
import { genderRadioGroup } from '@app/features/common/claim/features/newClaim/organisms/Patient/genderRadioGroup'

const targetRadioGroup = [
  {
    id: 'self',
    value: 'Для себя',
  },
  {
    id: 'other',
    value: 'Для близкого человека',
  },
]

export const RequestForm = () => {
  const onFormSubmit = (data: any) => {
    console.log('data:', data)
  }

  return (
    <Form
      // initialValues={'initial'}
      onSubmit={onFormSubmit as any}
      resetAfterSubmit
    >
      {() => (
        <>
          <label htmlFor="target" className={cx(styles.label, styles.field)}>
            Для кого вы ищете информацию?
          </label>
          <RadioGroup
            // validate={'schema.gender'}
            name="target"
            buttons={targetRadioGroup}
          />
          <label htmlFor="gender" className={cx(styles.label, styles.field)}>
            Пол
          </label>
          <RadioGroup
            // validate={gender}
            name="gender"
            buttons={genderRadioGroup}
          />

          <Button size={ButtonSize.Large} className={'styles.button'} submit>
            Отправить
          </Button>
        </>
      )}
    </Form>
  )
}
