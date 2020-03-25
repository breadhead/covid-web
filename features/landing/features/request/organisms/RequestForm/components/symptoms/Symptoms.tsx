import * as React from 'react';
import cx from 'classnames'

import { RadioGroup, Checkbox } from '@app/features/common/form'
import { temperatureList, symptomsSinceList, symptomsList, coughList, chestPainList, dyspneaList } from '../../config';
import * as styles from '../../RequestForm.css'

interface SymptomsProps {
  reset?: () => void
}

export const Symptoms = ({ reset }: SymptomsProps) => {
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
      <div className={styles.symptomsList}>
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
      </div>

      {checked.includes('cough') && <>
        <label htmlFor="cough" className={cx(styles.label, styles.field)}>
          Какой кашель?
        </label>
        <RadioGroup
          name="symptoms.coughOptions"
          buttons={coughList}
        />
      </>}

      {checked.includes('chest-pain') && <>
        <label htmlFor="chest-pain" className={cx(styles.label, styles.field)}>
          Опишите боль в груди:
        </label>
        {chestPainList.map(it => {
          return <Checkbox
            key={it.id}
            name={`symptoms.chestPainOptions.${it.id}`}
            type="checkbox"
            className={styles.checkbox}
          >
            {it.value}
          </Checkbox>
        })}
      </>}

      {checked.includes('temperature') && <>
        <label htmlFor="temperature" className={cx(styles.label, styles.field)}>
          Какая температура
        </label>
        <RadioGroup
          name="symptoms.temperatureOptions"
          buttons={temperatureList}
        />
      </>}

      {checked.includes('dyspnea') && <>
        <label htmlFor="dyspnea" className={cx(styles.label, styles.field)}>
          Какая одышка?
        </label>
        {dyspneaList.map(it => {
          return <Checkbox
            key={it.id}
            name={`symptoms.dyspneaOptions.${it.id}`}
            type="checkbox"
            className={styles.checkbox}
          >
            {it.value}
          </Checkbox>
        })}
      </>}

      {checked.length > 0 && <>
          <label htmlFor="since" className={cx(styles.label, styles.field)}>
            Когда появились симптомы?
            </label>
          <RadioGroup
            // validate={temperature}
            name="symptoms.sinceOptions"
            buttons={symptomsSinceList}
          />
        </>
      }
    </>

  )
}
