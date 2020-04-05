import React, { useReducer } from 'react';

import { SystemButton, SystemButtonSize } from '@app/src/ui/systemButton ';
import { NavLink } from '@app/src/ui/nav-link';
import { SPACE } from '@app/src/lib/config';

import * as styles from './SystemWidget.css';
import { FirstStep } from './first-step/FirstStep';
import { reducer, initialState } from './widgetReducer';
import * as actions from './widgetActions';

export const SystemWidget = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { frequency, cost, target } = state;

  return (
    <form
      onSubmit={(event: any) => {
        event.preventDefault();
        event.stopPropagation();
        // TODO: smth
      }}
      className={styles.widget}
    >
      <FirstStep
        cost={cost}
        frequency={frequency}
        target={target}
        setCost={(value) => dispatch({ type: actions.SET_COST, value })}
        setFrequency={(value) =>
          dispatch({ type: actions.SET_FREQUENCY, value })
        }
        setTarget={(value) => dispatch({ type: actions.SET_TARGET, value })}
        styles={styles}
      />

      <SystemButton
        className={styles.button}
        submit
        size={SystemButtonSize.ExtraLarge}
      >
        Продолжить
      </SystemButton>
      <p className={styles.cancelText}>
        Регулярное пожертвование можно всегда{SPACE}
        <NavLink
          withoutUnderline
          className={styles.cancelLink}
          blank
          href="https://my.cloudpayments.ru/ru/Unsubscribe"
        >
          отменить
        </NavLink>
      </p>
    </form>
  );
};
