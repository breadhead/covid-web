import React, { useState, useEffect } from 'react';

import { SystemButton } from '@app/src/ui/systemButton ';

enum CloudPaymentsState {
  Initial = 'initial',
  Complete = 'complete',
  Error = 'error',
}

interface CloudPaymentsProps {
  styles: { [key: string]: string };
}

export const CloudPayments = ({ styles }: CloudPaymentsProps) => {
  const [cloudPayments, setCloudPayments] = useState(null);
  const [step, setStep] = useState(CloudPaymentsState.Initial);
  const [reason, setReason] = useState(null);

  useEffect(() => {
    const widget = new (window as any).cp.CloudPayments();
    setCloudPayments(widget);
  }, []);

  const showWidget = ({
    description,
    amount,
    recurrent,
    email,
    firstname,
    lastname,
  }) => {
    const data = { firstname, lastname, email };

    if (recurrent) {
      (data as any).cloudPayments = {
        recurrent: { interval: 'Month', period: 1 },
      };
    }

    (cloudPayments as any).charge(
      {
        publicId: 'pk_be83b01a981129a5c65350e031240',
        description: description,
        amount: amount,
        currency: 'RUB',
        accountId: email,
        data,
      },
      (data) => {
        setStep(CloudPaymentsState.Complete);
      },
      (reason, options) => {
        setStep(CloudPaymentsState.Error);
        setReason(reason);
      },
    );

    return cloudPayments;
  };

  const pay = () => {
    const data /* get from store! */ = {
      description: 'Пожертвование: Помощь больницам',
      amount: 500,
      recurrent: true,
      email: 'leon@thatsme.ru',
      firstname: 'Леонид',
      lastname: 'Николаев',
    };

    showWidget(data);
  };

  return (
    <>
      {step === CloudPaymentsState.Initial && (
        <SystemButton submit onClick={pay} className={styles.actionButton}>
          Сделать пожертвование
        </SystemButton>
      )}
      {step === CloudPaymentsState.Complete && <h2>Спасибо за помощь!</h2>}
      {step === CloudPaymentsState.Error && (
        <>
          <h2>Ошибка! </h2> <p>{reason}</p>
          <SystemButton submit onClick={pay} className={styles.actionButton}>
            Попробовать еще раз
          </SystemButton>
        </>
      )}
    </>
  );
};
