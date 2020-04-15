import React, { useReducer, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { setPaymetWidgetData } from '@app/src/domain/reducers/paymentWidgetReducer';
import { useThunk } from '@app/src/helpers/hooks/useThunk';
import { PageType } from '@app/src/features/landing/features/partners/organisms/PartnersList/config';

import * as styles from './SystemWidget.css';
import { FirstStep } from './first-step';
import { reducer, getInitialState } from './widgetReducer';
import * as actions from './widgetActions';
import { SecondStep } from './second-step';
import { ThirdStep } from './third-step';

interface SystemWidgetProps {
  pageType?: PageType;
}

export const SystemWidget = ({ pageType }: SystemWidgetProps) => {
  const router = useRouter();
  const { query } = router;
  const dispatch = useThunk();

  const selectPageType = pageType || (Object.keys(query)[0] as PageType);
  const initialState = getInitialState(selectPageType);

  const [state, dispatchFormState] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { frequency, cost, target, name, surname, email, otherCost } = state;

  const getStep = () => {
    switch (step) {
      case 1:
        return (
          <FirstStep
            pageType={selectPageType}
            cost={cost}
            frequency={frequency}
            target={target}
            otherCost={otherCost}
            setCost={(value) =>
              dispatchFormState({ type: actions.SET_COST, value })
            }
            setFrequency={(value) =>
              dispatchFormState({ type: actions.SET_FREQUENCY, value })
            }
            setTarget={(value) =>
              dispatchFormState({ type: actions.SET_TARGET, value })
            }
            setOtherCost={(value) =>
              dispatchFormState({ type: actions.SET_OTHER_COST, value })
            }
            setStep={setStep}
            styles={styles}
          />
        );
      case 2:
        return (
          <SecondStep
            formData={state}
            isSubmitted={isSubmitted}
            styles={styles}
            name={name}
            setName={(value) =>
              dispatchFormState({ type: actions.SET_NAME, value })
            }
            surname={surname}
            email={email}
            setSurname={(value) =>
              dispatchFormState({ type: actions.SET_SURNAME, value })
            }
            setEmail={(value) =>
              dispatchFormState({ type: actions.SET_EMAIL, value })
            }
            setStep={setStep}
          />
        );
      case 3:
        return <ThirdStep styles={styles} />;
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <script
          id="cp_script"
          src="https://widget.cloudpayments.ru/bundles/cloudpayments"
        />
      </Head>
      <form
        onSubmit={async (event: any) => {
          event.preventDefault();
          event.stopPropagation();
          console.log('submit');
          await dispatch(setPaymetWidgetData(state));
          setIsSubmitted(true);
        }}
        className={styles.widget}
      >
        {getStep()}
      </form>
    </>
  );
};
