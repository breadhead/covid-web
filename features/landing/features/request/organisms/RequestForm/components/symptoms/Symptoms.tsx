import React, { useEffect } from 'react';
import cx from 'classnames'

import { RadioGroup, Checkbox } from '@app/features/common/form'
import { temperatureList, symptomsSinceList, symptomsList, coughList, chestPainList, dyspneaList } from '../../config';
import * as styles from '../../RequestForm.css'

interface SymptomsProps {
  checked: string[]
  setCheked: (arr: string[]) => void
  initialFields?: any
}

export const Symptoms = ({ checked, setCheked, initialFields }: SymptomsProps) => {
  const toggleSymptom = (id: string) => {
    if (checked.includes(id)) {
      setCheked(checked.filter(it => it !== id))
    } else {
      setCheked([...checked, id])
    }
  }

  useEffect(() => {
    if (!!initialFields) {
      setCheked(Object.keys(initialFields))
    }
  }, [initialFields])


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
          <div >
            <RadioGroup
              className={styles.symptomsRadioGroup}
              name="symptoms.coughOptions"
              buttons={coughList}
            />
          </div>
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
          <div >
            <RadioGroup
              className={styles.symptomsRadioGroup}
              name="symptoms.temperatureOptions"
              buttons={temperatureList}
            />
          </div>
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
        <div >
          <RadioGroup
            className={styles.symptomsRadioGroup}
            name="symptoms.sinceOptions"
            buttons={symptomsSinceList}
          />
        </div>
      </>
      }
    </>

  )
}
