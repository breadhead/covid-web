import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import cx from 'classnames';

import { Button } from '@app/src/ui/button';

import { WidgetForm } from '../widgetReducer';
import { getWidgetData } from './getWidgetData';

enum CloudPaymentsState {
  Initial = 'initial',
  Complete = 'complete',
  Error = 'error',
}

interface CloudPaymentsProps {
  styles: { [key: string]: string };
  isSubmitted: boolean;
  validate: any;
  setStep: (value: number) => void;
  formData: WidgetForm;
}

export const CloudPayments = ({
  styles,
  isSubmitted,
  validate,
  formData,
  setStep: setFormStep,
}: CloudPaymentsProps) => {
  const [step, setStep] = useState(CloudPaymentsState.Initial);
  const [reason, setReason] = useState(null);

  useEffect(() => {
    if (step === CloudPaymentsState.Complete) {
      setFormStep(3);
    }
  }, [step]);

  const showWidget = () => {
    const widgetData = getWidgetData(formData);

    (new (window as any).cp.CloudPayments() as any).charge(
      widgetData,
      (data) => {
        setStep(CloudPaymentsState.Complete);
      },
      (reason, options) => {
        setStep(CloudPaymentsState.Error);
        setReason(reason);
      },
    );
  };

  const pay = useCallback(async () => {
    const isValid = await validate();

    if (isValid) {
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
