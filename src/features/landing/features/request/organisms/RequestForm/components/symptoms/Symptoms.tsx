import React, { useEffect } from 'react';
import cx from 'classnames';

import { RadioGroup, Checkbox } from '@app/src/features/common/form';

import {
  temperatureList,
  symptomsSinceList,
  symptomsList,
  coughList,
  thoraxList,
  dyspneaList,
} from '../../config';
import * as styles from '../../RequestForm.css';
import { requiredSchema } from '../../schema';

interface SymptomsProps {
  checked: string[];
  setCheked: (arr: string[]) => void;
  initialFields?: any;
}

export const Symptoms = ({
  checked,
  setCheked,
  initialFields,
}: SymptomsProps) => {
  const toggleSymptom = (id: string) => {
    if (checked.includes(id)) {
      setCheked(checked.filter((it) => it !== id));
    } else {
      setCheked([...checked, id]);
    }
    return null;
  };

  useEffect(() => {
    if (!!initialFields) {
      const checked = Object.entries(initialFields)
        .map(([k, v]) => {
          if (!!v) {
            return k;
          }
          return null;
        })
        .filter((it) => !!it);

      setCheked(checked as any);
    }
  }, [initialFields]);

  return (
    <>
      <label htmlFor="symptoms" className={cx(styles.label, styles.field)}>
        Есть ли у вас какие-то из этих симптомов?
      </label>
      <div className={styles.symptomsList}>
        {symptomsList.map((it) => {
          return (
            <Checkbox
              onClick={() => toggleSymptom(it.id)}
              key={it.id}
              name={`symptoms.${it.id}`}
              type="checkbox"
              className={styles.checkbox}
            >
              {it.value}
            </Checkbox>
          );
        })}
      </div>

      {checked.includes('cough') && (
        <>
          <label
            htmlFor="symptoms.caughtType"
            className={cx(styles.label, styles.field)}
          >
            Какой кашель?
          </label>
          <div>
            <RadioGroup
              validate={requiredSchema}
              className={styles.symptomsRadioGroup}
              name="symptoms.caughtType"
              buttons={coughList}
            />
          </div>
        </>
      )}

      {checked.includes('thorax') && (
        <>
          <label
            htmlFor="symptoms.thoraxType"
            className={cx(styles.label, styles.field)}
          >
            Опишите боль в груди:
          </label>
          {thoraxList.map((it) => {
            return (
              <Checkbox
                key={it.id}
                name={`symptoms.thoraxType.${it.id}`}
                type="checkbox"
                className={styles.checkbox}
              >
                {it.value}
              </Checkbox>
            );
          })}
        </>
      )}

      {checked.includes('temperature') && (
        <>
          <label
            htmlFor="symptoms.temperatureType"
            className={cx(styles.label, styles.field)}
          >
            Какая температура
          </label>
          <div>
            <RadioGroup
              validate={requiredSchema}
              className={styles.symptomsRadioGroup}
              name="symptoms.temperatureType"
              buttons={temperatureList}
            />
          </div>
        </>
      )}

      {checked.includes('dyspnea') && (
        <>
          <label
            htmlFor="symptoms.dyspneaType"
            className={cx(styles.label, styles.field)}
          >
            Какая одышка?
          </label>
          {dyspneaList.map((it) => {
            return (
              <Checkbox
                key={it.id}
                name={`symptoms.dyspneaType.${it.id}`}
                type="checkbox"
                className={styles.checkbox}
              >
                {it.value}
              </Checkbox>
            );
          })}
        </>
      )}

      {checked.length > 0 && (
        <>
          <label
            htmlFor="symptoms.symptomsSince"
            className={cx(styles.label, styles.field)}
          >
            Когда появились симптомы?
          </label>
          <div>
            <RadioGroup
              validate={requiredSchema}
              className={styles.symptomsRadioGroup}
              name="symptoms.symptomsSince"
              buttons={symptomsSinceList}
            />
          </div>
        </>
      )}
    </>
  );
};
