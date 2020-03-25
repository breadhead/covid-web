import * as React from 'react'
import { Form, Input, RadioGroup, InputType } from '@app/features/common/form'
import * as styles from './RequestForm.css'
import cx from 'classnames'
import { Button, ButtonSize } from '@front/ui/button'
import { genderRadioGroup } from '@app/features/common/claim/features/newClaim/organisms/Patient/genderRadioGroup'
import RegionSelect from '@app/features/client/features/regionSelect'
import { Symptoms } from './components/symptoms'
import { targetList } from './config'

import { saveRequestFormData } from '../../reducer/actions'
import { useThunk } from '@app/src/hooks/useThunk'


export const RequestForm = () => {
  const dispatch = useThunk()

  const onFormSubmit = (data: any) => {
    console.log('data:', data)
    dispatch(saveRequestFormData(data))
    setCheked([])
  }

  const [checked, setCheked] = React.useState<string[]>([])


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
            buttons={targetList}
          />
          <RegionSelect
            changeField={() => null}
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
          <Symptoms
            checked={checked}
            setCheked={setCheked}
          />
          <Button size={ButtonSize.Large} className={styles.button} submit>
            Отправить
          </Button>
        </>
      )}
    </Form>
  )
}
