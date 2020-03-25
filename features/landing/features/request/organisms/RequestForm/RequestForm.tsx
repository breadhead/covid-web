import * as React from 'react'
import { Form, Input, RadioGroup, InputType } from '@app/features/common/form'
import * as styles from './RequestForm.css'
import cx from 'classnames'
import { Button, ButtonSize } from '@front/ui/button'
import { genderRadioGroup } from '@app/features/common/claim/features/newClaim/organisms/Patient/genderRadioGroup'
import RegionSelect from '@app/features/client/features/regionSelect'

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
          <RegionSelect
            changeField={(name, value) => null}
            name={`region`}
            styles={styles}
            textRegion="Регион"
            textCountry="Страна, где проходили лечение"
            textSwitch="Вы проходили лечение в России?"
          />
          <label htmlFor="gender" className={cx(styles.label, styles.field)}>
            Пол
          </label>
          <RadioGroup
            // validate={gender}
            name="gender"
            buttons={genderRadioGroup}
          />

          <label
            htmlFor="personalData.age"
            className={cx(styles.label, styles.field)}
          >
            Возраст (полных лет)
          </label>
          <Input
            // validate={age}
            name="age"
            type={InputType.Number}
          />

          <Button size={ButtonSize.Large} className={styles.button} submit>
            Отправить
          </Button>
        </>
      )}
    </Form>
  )
}
