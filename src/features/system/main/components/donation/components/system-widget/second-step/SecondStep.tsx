import React from 'react';

import { Input } from '@app/src/features/common/form';
import { SystemButton } from '@app/src/ui/systemButton ';
import { NavLink } from '@app/src/ui/nav-link';
import { SPACE } from '@app/src/lib/config';

import { CloudPayments } from '../cloud-payments/CloudPayments';

interface SecondStepProps {
  name: string;
  surname: string;
  email: string;
  setSurname: (value: string) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setStep: (value: number) => void;
  styles: { [key: string]: string };
}

export const SecondStep = ({
  name,
  surname,
  email,
  setSurname,
  setName,
  setEmail,
  setStep,
  styles,
}: SecondStepProps) => {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <Input
          onChange={(event) => setName(event?.target.value)}
          value={name}
          label="Фамилия"
          name="surname"
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          onChange={(event) => setSurname(event?.target.value)}
          value={surname}
          label="Имя"
          name="name"
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          onChange={(event) => setEmail(event?.target.value)}
          value={email}
          label="Эл. почта"
          name="name"
        />
      </div>
      <div className={styles.buttonsWrapper}>
        <button onClick={() => setStep(1)} className={styles.backButton}>
          Назад
        </button>
        <CloudPayments />
        {/* <SystemButton submit className={styles.actionButton}>
          Сделать пожертвование
        </SystemButton> */}
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
