import React from 'react';

import { frequencyForm, costForm, targetSelect } from '../formConfig';
import { SytemRadioButton } from '../../system-radio-button';

interface FirstStepProps {
  cost: string | null;
  frequency: string | null;
  target: string | null;
  setCost: (value: string) => void;
  setFrequency: (value: string) => void;
  setTarget: (value: string) => void;
  styles: { [key: string]: string };
}

export const FirstStep = ({
  cost,
  frequency,
  target,
  setCost,
  setFrequency,
  setTarget,
  styles,
}: FirstStepProps) => {
  return (
    <>
      <div className={styles.frequencyForm}>
        {frequencyForm.map((item) => {
          const { id, name, value, label } = item;
          return (
            <SytemRadioButton
              onClick={setFrequency}
              key={id}
              id={id}
              name={name}
              value={value}
              checked={frequency === id}
              label={label}
            />
          );
        })}
      </div>

      <div className={styles.costForm}>
        {costForm.map((item) => {
          const { id, name, value, label, size } = item;
          return (
            <SytemRadioButton
              className={styles[`cell-${size}`]}
              onClick={setCost}
              key={id}
              id={id}
              name={name}
              value={value}
              checked={cost === id}
              label={label}
            />
          );
        })}
      </div>

      {targetSelect && (
        <div className={styles.selectWrapper}>
          <label className={styles.selectLabel} htmlFor={targetSelect.name}>
            {targetSelect.label}
          </label>
          <select
            onChange={(event: any) => setTarget(event.target.value)}
            id={targetSelect.name}
          >
            {targetSelect.options.map((opt) => (
              <option
                selected={target === opt.value}
                key={opt.value}
                value={opt.value}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};
