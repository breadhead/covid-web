import * as React from 'react';
import cx from 'classnames'

import { RadioGroup, Checkbox } from '@app/features/common/form'
import { temperatureRadioGroup, symptomsList } from '../../config';
import * as styles from '../../RequestForm.css'

// interface SymptomsProps {
// }

export const Symptoms = () => {
  const [checked, setCheked] = React.useState<string[]>([])

  const toggleSymptom = (id: string) => {
    if (checked.includes(id)) {
      setCheked(checked.filter(it => it !== id))
    } else {
      setCheked([...checked, id])
    }
  }

  return (
    <>
      <label htmlFor="symptoms" className={cx(styles.label, styles.field)}>
        Есть ли у вас какие-то из этих симптомов?
    </label>
      {symptomsList.map(it => {
        return <Checkbox
          onClick={() => toggleSymptom(it.id)}
          key={it.id}
          name={`symptoms.${it.id}`}
          type="checkbox"
          className={styles.checkbox}
        >
          {it.value}
        </Checkbox>
      })}

      {checked.includes('temperature') && <>
        <label htmlFor="temperature" className={cx(styles.label, styles.field)}>
          Какая температура
        </label>
        <RadioGroup
          name="temperature"
          buttons={temperatureRadioGroup}
        />
      </>
      }
    </>

  )
}
