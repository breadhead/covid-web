import * as React from 'react'
import { Form, Input, RadioGroup, InputType } from '@app/features/common/form'
import * as styles from './RequestForm.css'
import cx from 'classnames'
import { Button, ButtonSize } from '@front/ui/button'
import { genderRadioGroup } from '@app/features/common/claim/features/newClaim/organisms/Patient/genderRadioGroup'
import RegionSelect from '@app/features/client/features/regionSelect'
import { RadioButtonStyles } from '@app/ui/RadioGroup'

const beginningRadioGroup = [
  {
    id: 'moreThanMonthAgo',
    value: 'Более месяца назад',
  },
  {
    id: 'severalWeeksAgo',
    value: 'Несколько недель назад',
  },
  {
    id: '7-10DaysAgo',
    value: '7-10 дней назад',
  },
  {
    id: '3-7DaysAgo',
    value: '3-7 дней назад',
  },
  {
    id: '0-2DaysAgo',
    value: '0-2 дня назад',
  },
]


const temperatureRadioGroup = [
  {
    id: '37-38',
    value: '37-38 градусов',
  },
  {
    id: '38-39',
    value: '38-39 градусов',
  },
  {
    id: '39',
    value: 'выше 39 градусов',
  },
]

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
      className={styles.form}
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
          <label htmlFor="symptoms" className={cx(styles.label, styles.field)}>
            Есть ли у вас какие-то из этих симптомов?
          </label>
          <div>чекбоксы</div>


          <label htmlFor="temperature" className={cx(styles.label, styles.field)}>
            Какая температура
          </label>
          <RadioGroup
            // validate={temperature}
            name="temperature"
            buttons={temperatureRadioGroup}
          />

          <label htmlFor="beginning" className={cx(styles.label, styles.field)}>
            Когда появились симптомы?
          </label>
          <RadioGroup
            // validate={temperature}
            name="beginning"
            buttons={beginningRadioGroup}
          />

          <Button size={ButtonSize.Large} className={styles.button} submit>
            Отправить
          </Button>
        </>
      )}
    </Form>
  )
}
