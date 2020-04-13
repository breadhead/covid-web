import React from 'react';

import Input from '@app/src/ui/Input';

interface PaymentWidgetInputProps {
  styles: { [key: string]: string };
  setValue: (value: any) => void;
  label: string;
  name: string;
  value: any;
  errors?: any[];
}

const getError = (key: string, errors?: any[]) => {
  if (!errors || errors.length === 0) {
    return false;
  }

  const errorField = errors.find((er) => !!er[key]);
  if (!errorField) {
    return false;
  }

  return errorField[key];
};

export const PaymentWidgetInput = ({
  styles,
  setValue,
  errors,
  label,
  name,
  value,
}: PaymentWidgetInputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <Input
        className={styles.input}
        onChange={(event: any) => {
          setValue(event?.target.value);
        }}
        value={value}
        label={label}
        name={name}
        error={getError(name, errors)}
      />
      {!!getError(name, errors) && (
        <span className={styles.error}>{getError(name, errors)}</span>
      )}
    </div>
  );
};
