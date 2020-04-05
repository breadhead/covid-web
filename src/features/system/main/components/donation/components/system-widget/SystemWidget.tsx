import React, { useReducer, useState } from 'react';

import * as styles from './SystemWidget.css';
import { FirstStep } from './first-step/FirstStep';
import { reducer, initialState } from './widgetReducer';
import * as actions from './widgetActions';
import { SecondStep } from './second-step';

export const SystemWidget = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);
  const { frequency, cost, target, name, surname, email } = state;

  console.log('state:', state);

  const getStep = () => {
    switch (step) {
      case 1:
        return (
          <FirstStep
            cost={cost}
            frequency={frequency}
            target={target}
            setCost={(value) => dispatch({ type: actions.SET_COST, value })}
            setFrequency={(value) =>
              dispatch({ type: actions.SET_FREQUENCY, value })
            }
            setTarget={(value) => dispatch({ type: actions.SET_TARGET, value })}
            setStep={setStep}
            styles={styles}
          />
        );
      case 2:
        return (
          <SecondStep
            styles={styles}
            name={name}
            setName={(value) => dispatch({ type: actions.SET_NAME, value })}
            surname={surname}
            email={email}
            setSurname={(value) =>
              dispatch({ type: actions.SET_SURNAME, value })
            }
            setEmail={(value) => dispatch({ type: actions.SET_EMAIL, value })}
            setStep={setStep}
          />
        );

      default:
        break;
    }
  };

  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault();
        event.stopPropagation();
        // TODO: smth
      }}
      className={styles.widget}
    >
      {getStep()}
    </form>
  );
};
