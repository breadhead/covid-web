import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import cx from 'classnames';

import { SystemButton } from '@app/src/ui/systemButton ';

import { WidgetForm } from '../widgetReducer';
import { FrequencyEnum } from '../formConfig';

enum CloudPaymentsState {
  Initial = 'initial',
  Complete = 'complete',
  Error = 'error',
}

interface CloudPaymentsProps {
  data: WidgetForm;
  styles: { [key: string]: string };
  isSubmitted: boolean;
  validate: any;
  setStep: (value: number) => void;
}

export const CloudPayments = ({
  data: formData,
  styles,
  isSubmitted,
  validate,
  setStep: setFormStep,
}: CloudPaymentsProps) => {
  const [cloudPayments, setCloudPayments] = useState(null);
  const [step, setStep] = useState(CloudPaymentsState.Initial);
  const [reason, setReason] = useState(null);

  useLayoutEffect(() => {
    const widget = new (window as any).cp.CloudPayments();
    setCloudPayments(widget);
  }, []);

  useEffect(() => {
    if (step === CloudPaymentsState.Complete) {
      setFormStep(3);
    }
  }, [step]);

  const showWidget = () => {
    const data = {
      firstname: name,
      lastname: formData.surname,
      email: formData.email,
    };

    const recurrent = formData.frequency === FrequencyEnum.Monthly;

    if (recurrent) {
      (data as any).cloudPayments = {
        recurrent: { interval: 'Month', period: 1 },
      };
    }

    (cloudPayments as any).charge(
      {
        // TODO: заменить на наш
        publicId: 'pk_be83b01a981129a5c65350e031240',
        description: formData.target,
        amount: Number(formData.cost),
        currency: 'RUB',
        accountId: formData.email,
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

  const pay = useCallback(async () => {
    const isValid = await validate();

    if (isSubmitted && isValid) {
      showWidget();
    }
  }, [isSubmitted, validate]);

  return (
    <>
      {step === CloudPaymentsState.Initial && (
        <SystemButton submit onClick={pay} className={styles.actionButton}>
          Сделать пожертвование
        </SystemButton>
      )}
      {step === CloudPaymentsState.Error && (
        <>
          <span className={cx(styles.error, styles.paymentError)}>
            Ошибка
            {console.log('error', reason)}
          </span>
          <SystemButton submit onClick={pay} className={styles.actionButton}>
            Попробовать еще раз
          </SystemButton>
        </>
      )}
    </>
  );
};
