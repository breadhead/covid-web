import React, { useState, useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import * as yup from 'yup';

import { NavLink } from '@app/src/ui/nav-link';
import { SPACE } from '@app/src/lib/config';
import { selectPaymentWidgetData } from '@app/src/domain/reducers/paymentWidgetReducer/selectPartners';

import { CloudPayments } from '../cloud-payments/CloudPayments';
import { schema } from './schema';
import { PaymentWidgetInput } from '../input';

interface SecondStepProps {
  name: string;
  surname: string;
  email: string;
  setSurname: (value: string) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setStep: (value: number) => void;
  styles: { [key: string]: string };
  isSubmitted: boolean;
}

export const SecondStep = ({
  name,
  surname,
  email,
  setSurname,
  setName,
  setEmail,
  setStep,
  isSubmitted,
  styles,
}: SecondStepProps) => {
  const data = useMappedState(selectPaymentWidgetData);
  const [errors, setErrors] = useState<any[]>([{}]);

  const validate = useCallback(() => {
    return yup
      .object()
      .shape(schema)
      .validate({ name, surname, email })
      .catch(function (err) {
        const { path, errors } = err;

        const newError = { [path]: errors[0] };

        setErrors((prev) => [
          ...prev.filter((er) => Object.keys(er) === path),
          newError,
        ]);
      })
      .then(function (valid) {
        if (!!valid) {
          setErrors([]);
          return true;
        }
        return false;
      });
  }, [name, surname, email, setSurname, setName, setEmail, errors]);

  const fields = [
    {
      styles,
      errors,
      setValue: setSurname,
      label: 'Фамилия',
      name: 'surname',
      value: surname,
    },
    {
      styles,
      errors,
      setValue: setName,
      label: 'Имя',
      name: 'name',
      value: name,
    },
    {
      styles,
      errors,
      setValue: setEmail,
      label: 'Эл. почта',
      name: 'email',
      value: email,
    },
  ];

  return (
    <div>
      {fields.map((field) => {
        const { styles, errors, setValue, label, name, value } = field;
        return (
          <PaymentWidgetInput
            key={name}
            styles={styles}
            errors={errors}
            setValue={setValue}
            label={label}
            name={name}
            value={value}
          />
        );
      })}
      <div className={styles.buttonsWrapper}>
        <button onClick={() => setStep(1)} className={styles.backButton}>
          Назад
        </button>
        <CloudPayments
          isSubmitted={isSubmitted}
          data={data}
          validate={validate}
          styles={styles}
        />
      </div>
      <p className={styles.cancelText}>
        Нажимая кнопку, я соглашаюсь с{SPACE}
        <NavLink
          withoutUnderline
          className={styles.cancelLink}
          blank
          href="https://nenaprasno.ru/upload/Oferta.pdf"
        >
          офертой
        </NavLink>
      </p>
    </div>
  );
};
