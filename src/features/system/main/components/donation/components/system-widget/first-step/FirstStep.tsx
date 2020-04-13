import React, { Dispatch, SetStateAction } from 'react';

import { Button, ButtonSize } from '@app/src/ui/button';
import { NavLink } from '@app/src/ui/nav-link';
import { SPACE } from '@app/src/lib/config';
import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';

import { SytemRadioButton } from '../../system-radio-button';
import { frequencyForm, costForm, getTargetSelect } from '../formConfig';
import { PaymentWidgetInput } from '../input';

interface FirstStepProps {
  cost: string | null;
  frequency: string | null;
  target: string | null;
  otherCost: string;
  pageType: PageType;
  setCost: (value: string) => void;
  setFrequency: (value: string) => void;
  setTarget: (value: string) => void;
  setOtherCost: (value: string) => void;
  setStep: Dispatch<SetStateAction<number>>;
  styles: { [key: string]: string };
}

export const FirstStep = ({
  cost,
  frequency,
  target,
  otherCost,
  setCost,
  setFrequency,
  setTarget,
  setOtherCost,
  setStep,
  styles,
  pageType,
}: FirstStepProps) => {
  const targetSelect = getTargetSelect(pageType);

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
      {cost === 'other' && (
        <PaymentWidgetInput
          key={'otherCost'}
          styles={styles}
          // errors={errors}
          setValue={setOtherCost}
          label={'Введите другую сумму:'}
          name={name}
          value={otherCost}
        />
      )}
      <Button
        className={styles.button}
        onClick={() => setStep(2)}
        size={ButtonSize.ExtraLarge}
      >
        Продолжить
      </Button>
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
    </>
  );
};
