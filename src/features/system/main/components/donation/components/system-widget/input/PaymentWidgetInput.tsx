import React from 'react';

import Input from '@app/src/ui/Input';

interface PaymentWidgetInputProps {
  styles: { [key: string]: string };
  setValue: (value: any) => void;
  errors: any[];
  label: string;
  name: string;
  value: any;
}

const getError = (errors: any[], key: string) => {
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
        error={getError(errors, name)}
      />
      {!!getError(errors, name) && (
        <span className={styles.error}>{getError(errors, name)}</span>
      )}
    </div>
  );
};
