import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import cx from 'classnames';

import { Button } from '@app/src/ui/button';

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
  // TODO: refactor
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
      // TODO: get from config
      {
        publicId: 'pk_61c70158bccb923e31954e244319a',
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
        <Button submit onClick={pay} className={styles.actionButton}>
          Сделать пожертвование
        </Button>
      )}
      {step === CloudPaymentsState.Error && (
        <>
          <span className={cx(styles.error, styles.paymentError)}>
            Ошибка
            {console.log('error', reason)}
          </span>
          <Button submit onClick={pay} className={styles.actionButton}>
            Попробовать еще раз
          </Button>
        </>
      )}
    </>
  );
};
