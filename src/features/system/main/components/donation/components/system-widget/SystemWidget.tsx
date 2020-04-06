import React, { useReducer, useState } from 'react';
import Head from 'next/head';

import { setPaymetWidgetData } from '@app/src/domain/reducers/paymentWidgetReducer';
import { useThunk } from '@app/src/helpers/hooks/useThunk';

import * as styles from './SystemWidget.css';
import { FirstStep } from './first-step/FirstStep';
import { reducer, initialState } from './widgetReducer';
import * as actions from './widgetActions';
import { SecondStep } from './second-step';

export const SystemWidget = () => {
  const [state, dispatchFormState] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);
  const { frequency, cost, target, name, surname, email } = state;
  const dispatch = useThunk();

  console.log('state:', state);

  const getStep = () => {
    switch (step) {
      case 1:
        return (
          <FirstStep
            cost={cost}
            frequency={frequency}
            target={target}
            setCost={(value) =>
              dispatchFormState({ type: actions.SET_COST, value })
            }
            setFrequency={(value) =>
              dispatchFormState({ type: actions.SET_FREQUENCY, value })
            }
            setTarget={(value) =>
              dispatchFormState({ type: actions.SET_TARGET, value })
            }
            setStep={setStep}
            styles={styles}
          />
        );
      case 2:
        return (
          <SecondStep
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
          await dispatch(setPaymetWidgetData(state));
        }}
        className={styles.widget}
      >
        {getStep()}
      </form>
    </>
  );
};
