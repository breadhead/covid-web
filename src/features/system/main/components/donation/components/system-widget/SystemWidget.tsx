import React, { useState } from 'react';

import { SystemButton, SystemButtonSize } from '@app/src/ui/systemButton ';
import { NavLink } from '@app/src/ui/nav-link';
import { SPACE } from '@app/src/lib/config';

import * as styles from './SystemWidget.css';
import { frequencyForm, costForm, targetSelect } from './formConfig';
import { SytemRadioButton } from '../system-radio-button';

export const SystemWidget = () => {
  const [frequency, setFrequency] = useState(
    frequencyForm.find((it) => !!it.checked)?.id,
  );
  const [cost, setCost] = useState(costForm.find((it) => !!it.checked)?.id);
  const [target, setTarget] = useState(
    targetSelect.options.find((opt) => !!opt.selected)?.value,
  );

  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault();
        event.stopPropagation();
        // TODO: smth
      }}
      className={styles.widget}
    >
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
          <label htmlFor={targetSelect.name}>{targetSelect.label}</label>
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

      <SystemButton
        className={styles.button}
        submit
        size={SystemButtonSize.ExtraLarge}
      >
        Продолжить
      </SystemButton>
      <p className={styles.cancelText}>
        Регулярное пожертвование можно всегда{SPACE}
        <NavLink
          withoutUnderline
          className={styles.cancelLink}
          blank
          href="https://my.cloudpayments.ru/ru/Unsubscribe"
        >
          отменить
        </NavLink>
      </p>
    </form>
  );
};
