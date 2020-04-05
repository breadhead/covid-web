import React, { useState } from 'react';

import { SystemButton, SystemButtonSize } from '@app/src/ui/systemButton ';
import { NavLink } from '@app/src/ui/nav-link';
import { SPACE } from '@app/src/lib/config';

import * as styles from './SystemWidget.css';
import { frequencyForm, costForm, targetSelect } from './formConfig';
import { FirstStep } from './first-step/FirstStep';

export const SystemWidget = () => {
  const [frequency, setFrequency] = useState(
    frequencyForm.find((it) => !!it.checked)?.id || null,
  );
  const [cost, setCost] = useState(
    costForm.find((it) => !!it.checked)?.id || null,
  );
  const [target, setTarget] = useState(
    targetSelect.options.find((opt) => !!opt.selected)?.value || null,
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
      <FirstStep
        cost={cost}
        frequency={frequency}
        target={target}
        setCost={setCost}
        setFrequency={setFrequency}
        setTarget={setTarget}
        styles={styles}
      />

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
