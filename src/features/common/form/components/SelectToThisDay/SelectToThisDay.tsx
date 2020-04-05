import cx from 'classnames';
import React, {useEffect, useState} from 'react';

import Checkbox from '@app/src/ui/Checkbox';

import {SelectMonths, SelectYears} from '../..';
import {FormContext} from '../Form';
import {getCurrentDate} from './getCurrentDate';
import styles from './SelectToThisDay.css';

interface Props {
  formContext: FormContext;
  name: string;
}

export const SelectToThisDay = ({ name, formContext }: Props) => {
  const [toThisDate, setToThisDate] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToThisDate(e.target.checked);
  };
  useEffect(() => {
    if (toThisDate) {
      formContext.changeField(name, {
        ...getCurrentDate(),
        toThisDate,
      });
    }
  }, [toThisDate]);

  return (
    <>
      <Checkbox onChange={onChange} className={styles.checkbox}>
        <span className={styles.checkboxLabel}>По настоящее время</span>
      </Checkbox>
      <div
        className={cx(
          styles.historyComboContainer,
          toThisDate && styles.hidden,
        )}
      >
        <SelectMonths
          name={`${name}.month`}
          placeholder="Месяц"
          className={cx(styles.historyCombo, styles.historyComboWrapper)}
        />

        <SelectYears
          name={`${name}.year`}
          placeholder="Год"
          className={cx(styles.historyCombo, styles.historyComboWrapper)}
        />
      </div>
    </>
  );
};
